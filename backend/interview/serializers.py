
from interview.models import Interview, InterviewTheme, InterviewSubTheme, Question, Answer
from rest_framework import serializers

class InterviewThemeSerializer(serializers.ModelSerializer):
    class Meta:
        model = InterviewTheme
        fields = '__all__'

class InterviewSubThemeSerializer(serializers.ModelSerializer):
    class Meta:
        model = InterviewSubTheme
        fields = '__all__'

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = '__all__'

class InterviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interview
        fields = '__all__'

