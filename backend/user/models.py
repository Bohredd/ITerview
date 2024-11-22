from __future__ import annotations
from django.contrib.auth.models import AbstractUser
from django.db import models
from user.manager import UsuarioManager
from django.templatetags.static import static
from plans.models import UserPlan, Plans

class User(AbstractUser):
    username = models.CharField("Username", max_length=100, blank=False, null=False)
    first_name = None
    last_name = None
    full_name = models.CharField(
        "Full name", max_length=100, blank=False, null=False
    )
    email = models.EmailField("E-mail", blank=True, unique=True)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["full_name"]

    objects = UsuarioManager()

    def __str__(self):
        return self.full_name

    def get_first_name(self):
        return self.full_name.split(" ")[0]

    def save(self, *args, **kwargs):
        if not self.pk:

            free_plan = Plans.objects.get(title="Junior")
            user_plan = UserPlan.objects.create(user=self, plan=free_plan)
            user_plan.save()

        super().save(*args, **kwargs)
