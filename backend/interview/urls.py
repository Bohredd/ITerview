from django.urls import path
from rest_framework.routers import DefaultRouter
from interview.views import (InterviewThemeViewSet, InterviewSubThemeViewSet, 
                             QuestionViewSet, AnswerViewSet, InterviewViewSet, GetAnswersQuestionViewSet,
                             GetQuestionsInterviewViewSet, GetThemesInterviewViewSet, GetSubThemesInterviewViewSet)

router = DefaultRouter()

router.register('api/interview_theme', InterviewThemeViewSet)
router.register('api/interview_sub_theme', InterviewSubThemeViewSet)
router.register('api/question', QuestionViewSet)
router.register('api/answer', AnswerViewSet)
router.register('api/interview', InterviewViewSet)
router.register('api/get_answers_question', GetAnswersQuestionViewSet, basename='get_answers_question')
router.register('api/get_questions_interview', GetQuestionsInterviewViewSet, basename='get_questions_interview')
router.register('api/get_themes_interview', GetThemesInterviewViewSet, basename='get_themes_interview')
router.register('api/get_sub_themes_interview', GetSubThemesInterviewViewSet, basename='get_sub_themes_interview')

urlpatterns = router.urls
