from django.db.models.signals import post_save
from django.dispatch import receiver
from jobs.tasks.payment.payment_verification import check_payment_status_task
from .models import Transaction

@receiver(post_save, sender=Transaction)
def transaction_created(sender, instance, created, **kwargs):
    if created:
        print("Transaction created")
        check_payment_status_task.apply_async(args=[instance.id])
