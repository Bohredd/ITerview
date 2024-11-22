from django.shortcuts import render
from rest_framework import viewsets
from .models import Plans
from .serializers import PlansSerializer

class PlansView(viewsets.ModelViewSet):
    queryset = Plans.objects.all()
    serializer_class = PlansSerializer