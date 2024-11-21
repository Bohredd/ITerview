from django.db import models

class Plans(models.Model):
    title = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    price = models.IntegerField()
    max_daily_participations = models.IntegerField()
    max_interview_participations = models.IntegerField()
    max_common_sentences = models.IntegerField()

    class Meta:
        db_table = "plans"

    def __str__(self):
        return self.title + " - U$" + str(self.price) 
    
class UserPlan(models.Model):
    plan = models.ForeignKey(Plans, on_delete=models.CASCADE)
    user = models.ForeignKey("user.User", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)

    transactions = models.ManyToManyField("payment.Transaction", blank=True)