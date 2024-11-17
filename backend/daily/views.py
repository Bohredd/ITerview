from daily.models import Daily, Speech, Person
from daily.serializers import DailySerializer, PersonSerializer, SpeechSerializer, GetSpeechesDailySerializer
from rest_framework import viewsets
from rest_framework.response import Response

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
    queryset = Daily.objects.all().prefetch_related('speeches') # Precarregar os discursos para evitar queries N+1
    serializer_class = GetSpeechesDailySerializer