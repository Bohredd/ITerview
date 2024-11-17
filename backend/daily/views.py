from daily.models import Daily, Speech, Person
from daily.serializers import DailySerializer, PersonSerializer, SpeechSerializer
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