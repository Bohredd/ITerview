from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.urls import reverse
from .serializers import PlanUserSerializer
import mercadopago
from decouple import config
from plans.models import Plans
from user.models import User
from payment.utils import get_dolar_to_brl
from rest_framework.authtoken.models import Token

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
                "payer": {
                    "email": user.email,
                },
            }

            result = sdk.preference().create(payment_data)

            url = result["response"]['init_point']

            return Response({"url": url}, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
