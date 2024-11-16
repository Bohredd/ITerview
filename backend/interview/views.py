from django.shortcuts import render
from interview.serializers import InterviewSerializer, InterviewThemeSerializer, InterviewSubThemeSerializer, QuestionSerializer, AnswerSerializer
from interview.models import Interview, InterviewTheme, InterviewSubTheme, Question, Answer
from rest_framework import viewsets


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

    