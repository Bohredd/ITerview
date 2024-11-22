from django.db import models
from django.db.models import TextChoices

class PaymentMethod(TextChoices):
    credit_card = "credit_card", "Credit Card"
    pix = "pix", "Pix"

class Transaction(models.Model):
    amount = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=255)
    payment_method = models.CharField(max_length=255, choices=PaymentMethod.choices)

    plan_acquired = models.ForeignKey("plans.Plans", on_delete=models.CASCADE)