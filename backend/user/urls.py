from .views import UserViewSet, LoginView
from rest_framework.routers import DefaultRouter
from django.urls import path

router = DefaultRouter()
router.register(r'api/user', UserViewSet, basename='user')

urlpatterns = router.urls

urlpatterns += [
    path('api/login', LoginView.as_view(), name='login'),
]