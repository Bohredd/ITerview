from .models import User
from rest_framework import viewsets
from .serializers import UserSerializer, ForgotPasswordSerializer
from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from .serializers import LoginSerializer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny
from django.core.mail import send_mail

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

    def post(self, request, *args, **kwargs):
        serializer = ForgotPasswordSerializer(data=request.data)

        if serializer.is_valid():
            email = serializer.validated_data["email"]
            username = serializer.validated_data["username"]

            # Validate email and username
            user = User.objects.filter(email=email, username=username).first()

            print("Users ", User.objects.all().values_list("email", "username"))

            if user:
                # Simulate sending a reset link
                reset_link = (
                    f"http://yourfrontend.com/reset-password?token=exampletoken"
                )
                send_mail(
                    subject="Password Reset Request",
                    message=f"Click the link to reset your password: {reset_link}",
                    from_email="no-reply@example.com",
                    recipient_list=[email],
                )
                return Response(
                    {"message": "Password reset link sent to your email."},
                    status=status.HTTP_200_OK,
                )

            return Response(
                {"message": "User not found with the provided email and username."},
                status=status.HTTP_404_NOT_FOUND,
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
