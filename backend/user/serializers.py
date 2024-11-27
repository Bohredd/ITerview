from .models import User
from rest_framework import serializers
from django.core.exceptions import ValidationError
from django.contrib.auth.password_validation import validate_password
from rest_framework.authtoken.models import Token

class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'full_name', 'email', 'password']

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

class ForgotPasswordSerializer(serializers.Serializer):
    email = serializers.EmailField()
    username = serializers.CharField(max_length=100)


class ChangePasswordSerializer(serializers.Serializer):
    user_token = serializers.CharField(write_only=True)
    current_password = serializers.CharField(write_only=True)
    new_password = serializers.CharField(write_only=True)

    def validate_user_token(self, value):
        try:
            user = Token.objects.get(key=value).user
            self.context["user"] = user  
        except Token.DoesNotExist:
            raise serializers.ValidationError("Invalid token provided.")
        return value

    def validate_current_password(self, value):
        user = self.context.get("user")
        if not user.check_password(value):
            raise serializers.ValidationError("Current password is incorrect.")
        return value

    def validate_new_password(self, value):
        user = self.context.get("user")
        try:
            validate_password(value, user=user)
        except ValidationError as e:
            raise serializers.ValidationError(e.messages)
        return value

    def save(self, **kwargs):
        user = self.context.get("user")
        new_password = self.validated_data["new_password"]
        user.set_password(new_password)
        user.save()
        return user
