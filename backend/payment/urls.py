from django.urls import path
from .views import PlanUserView, PaymentSuccessView

urlpatterns = [
    path('api/generate_plan_payment/', PlanUserView.as_view(), name='plan_user'),
    path('api/validate_payment/', PaymentSuccessView.as_view(), name='payment_success'),
]