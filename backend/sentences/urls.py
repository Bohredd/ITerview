from django.urls import path
from .views import SentencesViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register(r'api/sentences', SentencesViewSet)

urlpatterns = router.urls