
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


class GetAnswersQuestionSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = ['id', 'text', 'interview_type', 'level', 'answers']

class GetQuestionsInterviewSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True)

    class Meta:
        model = Interview
        fields = ['id', 'interview_type', 'level', 'questions']
        

class GetThemesInterviewSerializer(serializers.ModelSerializer):
    themes = InterviewThemeSerializer(many=True, read_only=True)
    sub_themes = InterviewSubThemeSerializer(many=True, read_only=True)

    class Meta:
        model = Interview
        fields = ['id', 'interview_type', 'level', 'themes', 'sub_themes']

class GetSubThemesInterviewSerializer(serializers.ModelSerializer):
    sub_themes = InterviewSubThemeSerializer(many=True, read_only=True)

    class Meta:
        model = Interview
        fields = ['id', 'interview_type', 'level', 'sub_themes']