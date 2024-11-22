from .views import PlansView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r"api/plan", PlansView)

urlpatterns = router.urls
