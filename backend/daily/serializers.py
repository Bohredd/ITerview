from rest_framework import serializers
from .models import Daily, Information, Person, ProbablyAnswer, Speech

class DailySerializer(serializers.ModelSerializer):
    class Meta:
        model = Daily
        fields = '__all__'

class SpeechSerializer(serializers.ModelSerializer):
    class Meta:
        model = Speech
        fields = '__all__'

class PersonSerializer(serializers.ModelSerializer):
    speeches = SpeechSerializer(many=True, read_only=True)

    class Meta:
        model = Person
        fields = ['id', 'name', 'role', 'is_you', 'voice', 'image', 'speeches']

class GetSpeechesDailySerializer(serializers.ModelSerializer):

    speeches = SpeechSerializer(many=True, read_only=True)
    class Meta:
        model = Daily
        fields = '__all__'

class GetPersonsDailySerializer(serializers.ModelSerializer):

    people = PersonSerializer(many=True, read_only=True)
    class Meta:
        model = Daily
        fields = ['people']

class ProbablyAnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProbablyAnswer
        fields = '__all__'

class InformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Information
        fields = '__all__'


class GetSpeechesCorrectAnswerSerializer(serializers.ModelSerializer):
    probably_answers = serializers.SerializerMethodField()

    class Meta:
        model = Speech
        fields = [
            "id",
            "order",
            "speaker",
            "content",
            "is_question",
            "is_to_you",
            "probably_answers",
        ]

    def get_probably_answers(self, obj):
        # Retorna apenas os valores do campo 'answer' para respostas corretas
        correct_answers = obj.probably_answers.filter(is_correct=True).values_list(
            "id", flat=True
        )
        return list(correct_answers)
