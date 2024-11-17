from daily.views import DailyViewSet, SpeechViewSet, PersonViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'api/daily', DailyViewSet)
router.register(r'api/speech', SpeechViewSet)
router.register(r'api/person', PersonViewSet)

urlpatterns = router.urls