from django.urls import path
from .views import PlanUserView

urlpatterns = [
    path('api/generate_plan_payment/<int:plan_id>/<int:user_id>/', PlanUserView.as_view(), name='plan_user'),
]