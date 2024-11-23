from django.contrib import admin
from plans.models import Plans, UserPlan

admin.site.register(Plans)
admin.site.register(UserPlan)