from rest_framework import serializers
from plans.models import Plans
from user.models import User


class PlanUserSerializer(serializers.Serializer):
    plan_id = serializers.IntegerField()
    user_id = serializers.IntegerField()

    def validate_plan_id(self, value):
        try:
            Plans.objects.get(id=value)
        except Plans.DoesNotExist:
            raise serializers.ValidationError("Plan with this ID does not exist.")
        return value

    def validate_user_id(self, value):
        try:
            User.objects.get(id=value)
        except User.DoesNotExist:
            raise serializers.ValidationError("User with this ID does not exist.")
        return value
