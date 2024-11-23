from .models import User
from rest_framework import viewsets
from .serializers import UserSerializer
from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from .serializers import LoginSerializer
from rest_framework.authtoken.models import Token

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
