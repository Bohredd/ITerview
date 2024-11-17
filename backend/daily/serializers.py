from rest_framework import serializers
from .models import Daily, Information, Person, ProbablyAnswer, Speech

class DailySerializer(serializers.ModelSerializer):
    class Meta:
        model = Daily
        fields = '__all__'

class SpeechSerializer(serializers.ModelSerializer):
    class Meta:
        model = Speech
        fields = ['id', 'order', 'content', 'is_question', 'is_to_you']

class PersonSerializer(serializers.ModelSerializer):
    speeches = SpeechSerializer(many=True, read_only=True)

    class Meta:
        model = Person
        fields = ['id', 'name', 'role', 'is_you', 'voice', 'image', 'speeches']
