from django.db.models.signals import pre_save
from django.dispatch import receiver
from .models import UserPlan
from jobs.tasks.plans import change_plan_after_30days as changer_plan
from datetime import timedelta

@receiver(pre_save, sender=UserPlan)
def plan_changed(sender, instance, **kwargs):
    if instance.pk: 
        previous_instance = UserPlan.objects.get(pk=instance.pk)
        if previous_instance.plan != instance.plan:

            time_to_run = 30 * 24 * 60 * 60 # 30 days
            time_to_run_1_minute = 60 # 1 minute

            changer_plan.change_plan_after_30days_task.apply_async(
                args=[instance.user.id], countdown=time_to_run
            )
