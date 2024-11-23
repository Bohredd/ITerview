from django.urls import path
from .views import PlanUserView, PaymentSuccessView, DiscountGameUsageView, CanPlayGameView

urlpatterns = [
    path("api/generate_plan_payment/", PlanUserView.as_view(), name="plan_user"),
    path("api/validate_payment/", PaymentSuccessView.as_view(), name="payment_success"),
    path(
        "api/discount_game_usage/",
        DiscountGameUsageView.as_view(),
        name="discount_game_usage",
    ),
    path("api/can_play_game/", CanPlayGameView.as_view(), name="can_play_game"),
]
