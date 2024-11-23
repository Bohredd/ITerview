from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import PlanUserSerializer, TransactionSerializer
import mercadopago
from decouple import config
from plans.models import Plans, UserPlan
from payment.utils import get_dolar_to_brl
from rest_framework.authtoken.models import Token
from payment.models import Transaction
import hashlib
import datetime

class PlanUserView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = PlanUserSerializer(data=request.data)
        if serializer.is_valid():

            # trocar para prd no deploy

            sdk = mercadopago.SDK(config("MERCADO_PAGO_ACCESS_TOKEN_TEST"))

            plan_id = serializer.validated_data["plan_id"]
            user_token = serializer.validated_data["user_token"]

            plan = Plans.objects.get(id=plan_id)
            user = Token.objects.get(key=user_token).user

            dolar_to_brl = get_dolar_to_brl()

            external_reference = hashlib.sha256(f"{user.id}-{plan.id}-{plan.title}-{user.email}-{datetime.datetime.now()}".encode()).hexdigest()

            transaction = Transaction.objects.create(
                plan_acquired=plan,
                amount=float(dolar_to_brl) * float(plan.price),
                status="pending",
                created_at=datetime.datetime.now(),
                payment_method="",
                hash_id=external_reference,
                updated_at=datetime.datetime.now(),
            )

            user.transactions.add(transaction)
            user.save()

            payment_data = {
                "items": [
                    {
                        "id": plan.id,
                        "title": f"Plan {plan.title}",  
                        "quantity": 1,
                        "unit_price": float(dolar_to_brl) * float(plan.price),
                        "currency_id": "BRL",
                        "description": f"You are subscribing to the plan {plan.description}",
                    }
                ],
                "back_urls": {
                    "success": 'http://localhost:5173/payment/success',
                    "failure": 'http://localhost:5173/payment/failure',
                    "pending": 'http://localhost:5173/payment/pending',
                },
                "payer": {
                    "email": user.email,
                },
                "external_reference": external_reference,
            }

            result = sdk.preference().create(payment_data)

            print(result)

            url = result["response"]['init_point']

            return Response({"url": url}, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PaymentSuccessView(APIView):
    def get(self, request, *args, **kwargs):

        serializer = TransactionSerializer(data=request.data)

        if serializer.is_valid():

            user_token = serializer.validated_data["user_token"]

            # print("user_token", user_token)
            # print("All tokens ", Token.objects.all())
            user = Token.objects.get(key=user_token).user

            transaction = Transaction.objects.filter(user=user).last()

            hash_id = transaction.hash_id

            sdk = mercadopago.SDK(config("MERCADO_PAGO_ACCESS_TOKEN_TEST"))

            payment = sdk.payment().search({"external_reference": hash_id})
            # print(payment)
            if payment["response"]["results"][0]["status"] == "approved":
                transaction.status = "approved"

                payment_method = payment["response"]["results"][0]["payment_method_id"]

                if payment_method == "credit_card":
                    transaction.payment_method = "credit_card"
                else:
                    transaction.payment_method = "pix"

                # transaction.payment_method = payment["response"]["results"][0]["payment_method_id"]
                transaction.updated_at = datetime.datetime.now()
                transaction.save()

                user_plan = UserPlan.objects.filter(user=user)

                if not user_plan.exists():
                    UserPlan.objects.create(user=user, plan=Plans.objects.get(title="Junior"))

                    user_plan = UserPlan.objects.get(user=user)

                else:
                    user_plan = user_plan.first()

                user_plan.plan = transaction.plan_acquired
                user_plan.active = True
                user_plan.changed_at = datetime.datetime.now()
                user_plan.end_date = datetime.datetime.now() + datetime.timedelta(days=30)
                user_plan.save()

                return Response({"message": "Payment approved. You are now subscribed"}, status=status.HTTP_200_OK)
            else:
                return Response({"message": "Payment not approved"}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def post(self, request, *args, **kwargs):
        return self.get(request, *args, **kwargs)