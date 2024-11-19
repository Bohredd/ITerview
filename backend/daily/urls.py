from daily.views import DailyViewSet, SpeechViewSet, PersonViewSet, DailySpeechViewSet, DailyPersonViewSet, ProbablyAnswerViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'api/daily', DailyViewSet)
router.register(r'api/speech', SpeechViewSet)
router.register(r'api/person', PersonViewSet)
router.register(r'api/daily_speech', DailySpeechViewSet, basename='daily_speech')
router.register(r'api/daily_person', DailyPersonViewSet, basename='daily_person')
router.register(r'api/probably_answer', ProbablyAnswerViewSet, basename='probably_answer')

urlpatterns = router.urls