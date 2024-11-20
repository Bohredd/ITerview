from django.shortcuts import render
from rest_framework import viewsets
from .models import Sentences
from .serializers import SentencesSerializer


class SentencesViewSet(viewsets.ModelViewSet):
    queryset = Sentences.objects.all()
    serializer_class = SentencesSerializer