from daily.views import (DailyViewSet, SpeechViewSet, PersonViewSet, 
                         DailySpeechViewSet, DailyPersonViewSet, 
                         ProbablyAnswerViewSet, InformationViewSet,
                         GetCorrectAnswerFromQuestionViewSet)
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'api/daily', DailyViewSet)
router.register(r'api/speech', SpeechViewSet)
router.register(r'api/person', PersonViewSet)
router.register(r'api/daily_speech', DailySpeechViewSet, basename='daily_speech')
router.register(r'api/daily_person', DailyPersonViewSet, basename='daily_person')
router.register(r'api/probably_answer', ProbablyAnswerViewSet, basename='probably_answer')
router.register(r'api/information', InformationViewSet, basename='information')
router.register(r'api/correct_answer', GetCorrectAnswerFromQuestionViewSet, basename='correct_answer')

urlpatterns = router.urls