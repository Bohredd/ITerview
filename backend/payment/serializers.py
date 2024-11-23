from rest_framework import serializers
from plans.models import Plans
from user.models import User
from rest_framework.authtoken.models import Token

class PlanUserSerializer(serializers.Serializer):
    plan_id = serializers.IntegerField()
    user_token = serializers.CharField()

    def validate_plan_id(self, value):
        try:
            Plans.objects.get(id=value)
        except Plans.DoesNotExist:
            raise serializers.ValidationError("Plan with this ID does not exist.")
        return value

    def validate_user_id(self, value):
        try:
            Token.objects.get(key=value).user
        except User.DoesNotExist:
            raise serializers.ValidationError("User with this ID does not exist.")
        return value
    
class TransactionSerializer(serializers.Serializer):
    user_token = serializers.CharField()

    def validate_user_token(self, value):
        try:
            Token.objects.get(key=value)
        except Token.DoesNotExist:
            raise serializers.ValidationError("User with this token does not exist.")
        return value

# {"plan_id":2, "user_token": "8f3e88858e87f20ee3df40bdef7802e2c9079de1"}
