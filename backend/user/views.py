from .models import User
from rest_framework import viewsets
from .serializers import UserSerializer, ForgotPasswordSerializer, ChangePasswordSerializer
from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from .serializers import LoginSerializer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny
from django.core.mail import send_mail
import random
import string
from django.core.mail import EmailMultiAlternatives
from decouple import config

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = LoginSerializer(data=request.data)

        if serializer.is_valid():
            email = serializer.validated_data["email"]
            password = serializer.validated_data["password"]

            user = authenticate(request, username=email, password=password)

            if user is not None:
                token, created = Token.objects.get_or_create(user=user)

                return Response(
                    {"message": "Login successful", "token": token.key},
                    status=status.HTTP_200_OK,
                )
            else:
                return Response(
                    {"message": "Invalid email or password"},
                    status=status.HTTP_400_BAD_REQUEST,
                )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ForgotPasswordView(APIView):
    permission_classes = [AllowAny]

    def generate_random_password(self, length=12):
        """Generate a random password with letters, digits, and special characters."""
        characters = string.ascii_letters + string.digits + "!@#$%^&*()"
        return "".join(random.choices(characters, k=length))

    def post(self, request, *args, **kwargs):
        serializer = ForgotPasswordSerializer(data=request.data)

        if serializer.is_valid():
            email = serializer.validated_data["email"]
            username = serializer.validated_data["username"]

            # Validate email and username
            user = User.objects.filter(email=email, username=username).first()

            if user:
                new_password = self.generate_random_password()

                user.set_password(new_password)
                user.save()

                subject = "Your New Password at ITerview!"
                text_content = (
                    f"Hello {user.username},\n\n"
                    f"Your new password is: {new_password}\n\n"
                    f"Please log in and change your password as soon as possible.\n\n"
                    f"Log in here: {config("APP_URL")}/login"
                )
                html_content = f"""
                    <p>Hello <strong>{user.username}</strong>,</p>
                    <p>Your new password is: <strong>{new_password}</strong></p>
                    <p>Please <a href="{config("APP_URL")}/login">log in here</a> and change your password as soon as possible.</p>
                """

                email_message = EmailMultiAlternatives(
                    subject, text_content, "no-reply@example.com", [email]
                )
                email_message.attach_alternative(html_content, "text/html")
                email_message.send()

                return Response(
                    {"message": "A new password has been sent to your email."},
                    status=status.HTTP_200_OK,
                )

            return Response(
                {"message": "User not found with the provided email and username."},
                status=status.HTTP_404_NOT_FOUND,
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ChangePasswordView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = ChangePasswordSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "Password changed successfully."}, status=status.HTTP_200_OK
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
