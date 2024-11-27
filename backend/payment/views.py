from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import PlanUserSerializer, TransactionSerializer, DiscountGameUsageSerializer
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

            if config("DEBUG", default=False, cast=bool):
                sdk = mercadopago.SDK(config("MERCADO_PAGO_ACCESS_TOKEN_TEST"))
            else:
                sdk = mercadopago.SDK(config("MERCADO_PAGO_ACCESS_TOKEN_PRD"))

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
                    "success": 'http://localhost:5173/payment/success/',
                    "failure": 'http://localhost:5173/payment/failure/',
                    "pending": 'http://localhost:5173/payment/pending/',
                },
                "payer": {
                    "email": user.email,
                },
                "external_reference": external_reference,
            }

            result = sdk.preference().create(payment_data)

            url = result["response"]['init_point']

            return Response({"url": url}, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PaymentSuccessView(APIView):
    def get(self, request, *args, **kwargs):

        serializer = TransactionSerializer(data=request.data)

        if serializer.is_valid():

            user_token = serializer.validated_data["user_token"]

            user = Token.objects.get(key=user_token).user

            transaction = Transaction.objects.filter(user=user).last()

            hash_id = transaction.hash_id

            sdk = mercadopago.SDK(config("MERCADO_PAGO_ACCESS_TOKEN_TEST"))

            payment = sdk.payment().search({"external_reference": hash_id})
            if payment["response"]["results"][0]["status"] == "approved":
                transaction.status = "approved"

                payment_method = payment["response"]["results"][0]["payment_method_id"]

                if payment_method == "credit_card":
                    transaction.payment_method = "credit_card"
                else:
                    transaction.payment_method = "pix"

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

class DiscountGameUsageView(APIView):

    def post(self, request, *args, **kwargs):

        serializer = DiscountGameUsageSerializer(data=request.data)

        if serializer.is_valid():
            user_token = serializer.validated_data["user_token"]
            game_name = serializer.validated_data["game_name"]

            user = Token.objects.get(key=user_token).user

            user_plan = UserPlan.objects.get(user=user)

            if game_name == 'Fake Daily Meeting':
                user_plan.daily_usage += 1
            elif game_name == 'Fake Job Interview':
                user_plan.interview_usage += 1
            elif game_name == 'Most Common Sentences':
                user_plan.common_sentences_usage += 1

            user_plan.save()

            return Response({"message": "Game usage updated"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CanPlayGameView(APIView):

    def post(self, request, *args, **kwargs):

        serializer = DiscountGameUsageSerializer(data=request.data)

        if serializer.is_valid():
            user_token = serializer.validated_data["user_token"]
            game_name = serializer.validated_data["game_name"]

            user = Token.objects.get(key=user_token).user

            user_plan = UserPlan.objects.get(user=user)

            usage = 0

            if game_name == "Fake Daily Meeting":
                usage = user_plan.daily_usage
            elif game_name == "Fake Job Interview":
                usage = user_plan.interview_usage
            elif game_name == "Most Common Sentences":
                usage = user_plan.common_sentences_usage

            limit = 0

            if game_name == "Fake Daily Meeting":
                limit = user_plan.plan.max_daily_participations
            elif game_name == "Fake Job Interview":
                limit = user_plan.plan.max_interview_participations
            elif game_name == "Most Common Sentences":
                limit = user_plan.plan.max_common_sentences

            if limit == None:
                return Response(
                    {"message": "You can play this game"}, status=status.HTTP_200_OK
                )

            if usage >= limit:
                return Response({"message": "You have reached the limit for this game"}, status=status.HTTP_400_BAD_REQUEST)

            return Response(
                {"message": "You can play this game"}, status=status.HTTP_200_OK
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
