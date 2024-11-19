from daily.models import Daily, Speech, Person, ProbablyAnswer
from daily.serializers import DailySerializer, PersonSerializer, SpeechSerializer, GetSpeechesDailySerializer, GetPersonsDailySerializer, ProbablyAnswerSerializer
from rest_framework import viewsets

class DailyViewSet(viewsets.ModelViewSet):
    queryset = Daily.objects.all()
    serializer_class = DailySerializer

class SpeechViewSet(viewsets.ModelViewSet):
    queryset = Speech.objects.all()
    serializer_class = SpeechSerializer

class PersonViewSet(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer

class DailySpeechViewSet(viewsets.ModelViewSet):
    queryset = Daily.objects.all().prefetch_related('speeches')
    serializer_class = GetSpeechesDailySerializer

class DailyPersonViewSet(viewsets.ModelViewSet):
    queryset = Daily.objects.all().prefetch_related('people')
    serializer_class = GetPersonsDailySerializer

class ProbablyAnswerViewSet(viewsets.ModelViewSet):
    queryset = ProbablyAnswer.objects.all()
    serializer_class = ProbablyAnswerSerializer