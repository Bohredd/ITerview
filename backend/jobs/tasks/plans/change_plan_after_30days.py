from celery import shared_task
from celery.exceptions import MaxRetriesExceededError
from user.models import User
from plans.models import UserPlan, Plans
from django.utils import timezone

@shared_task(name="change_plan_after_30days_task")
def change_plan_after_30days_task(user_id):

    user = User.objects.get(pk=user_id)

    user_plan = UserPlan.objects.get(user=user)

    plan_junior = Plans.objects.get(title="Junior")

    user_plan.plan = plan_junior
    user_plan.active = True
    user_plan.changed_at = timezone.now()
    user_plan.updated_at = timezone.now()
    user_plan.save()

    return "Plan changed to Junior default again after 30 days"