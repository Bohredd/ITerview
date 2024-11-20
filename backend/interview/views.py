from django.shortcuts import render
from interview.serializers import (InterviewSerializer, InterviewThemeSerializer, InterviewSubThemeSerializer, 
                                   QuestionSerializer, AnswerSerializer, GetAnswersQuestionSerializer,
                                   GetQuestionsInterviewSerializer, GetThemesInterviewSerializer, GetSubThemesInterviewSerializer,
                                   GetCorrectAnswerFromQuestionSerializer)
from interview.models import Interview, InterviewTheme, InterviewSubTheme, Question, Answer
from rest_framework import viewsets
from rest_framework.viewsets import ReadOnlyModelViewSet


class InterviewThemeViewSet(viewsets.ModelViewSet):
    queryset = InterviewTheme.objects.all()
    serializer_class = InterviewThemeSerializer

class InterviewSubThemeViewSet(viewsets.ModelViewSet):
    queryset = InterviewSubTheme.objects.all()
    serializer_class = InterviewSubThemeSerializer

class InterviewViewSet(viewsets.ModelViewSet):
    queryset = Interview.objects.all()
    serializer_class = InterviewSerializer

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

class AnswerViewSet(viewsets.ModelViewSet):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer

class GetAnswersQuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all().prefetch_related('answers')  # Precarregar as respostas para evitar queries N+1
    serializer_class = GetAnswersQuestionSerializer

class GetQuestionsInterviewViewSet(viewsets.ModelViewSet):
    queryset = Interview.objects.all().prefetch_related('questions')  # Precarregar as perguntas para evitar queries N+1
    serializer_class = GetQuestionsInterviewSerializer

class GetThemesInterviewViewSet(viewsets.ModelViewSet):
    queryset = Interview.objects.all().prefetch_related('themes')  # Precarregar os temas para evitar queries N+1
    serializer_class = GetThemesInterviewSerializer

class GetSubThemesInterviewViewSet(viewsets.ModelViewSet):
    queryset = Interview.objects.all().prefetch_related('sub_themes')  # Precarregar os subtemas para evitar queries N+1
    serializer_class = GetSubThemesInterviewSerializer  

class GetCorrectAnswerFromQuestionViewSet(ReadOnlyModelViewSet):
    """
    ViewSet to retrieve questions with their correct answers.
    """
    queryset = Question.objects.all().prefetch_related('answers')  # Pre-fetch related answers for efficiency
    serializer_class = GetCorrectAnswerFromQuestionSerializer