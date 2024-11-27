from .views import UserViewSet, LoginView, ForgotPasswordView, ChangePasswordView
from rest_framework.routers import DefaultRouter
from django.urls import path

router = DefaultRouter()
router.register(r'api/user', UserViewSet, basename='user')

urlpatterns = router.urls

urlpatterns += [
    path('api/login', LoginView.as_view(), name='login'),
    path('api/forgot_password', ForgotPasswordView.as_view(), name='forgot_password'),
    path('api/change_password', ChangePasswordView.as_view(), name='change_password'),
]