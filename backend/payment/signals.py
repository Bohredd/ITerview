from django.db.models.signals import post_save
from django.dispatch import receiver
from jobs.tasks.payment.payment_verification import check_payment_status_task
from .models import Transaction
from plans.models import Plans

@receiver(post_save, sender=Transaction)
def transaction_created(sender, instance, created, **kwargs):
    if created and instance.plan_acquired != Plans.objects.get(title="Junior") and instance.status != "approved":
        check_payment_status_task.apply_async(args=[instance.hash_id])
