from .views import UserViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'api/user', UserViewSet)

urlpatterns = router.urls