from sentences.models import Sentences
from rest_framework import serializers


class SentencesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sentences
        fields = '__all__'