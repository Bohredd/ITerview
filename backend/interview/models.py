from django.db import models
from django.db.models import TextChoices

class InterviewType(TextChoices):
    tech = 'tech', 'Technical'
    behavior = 'behavior', 'Behavioral'

class InterviewLevel(TextChoices):
    junior = 'junior', 'Junior'
    mid = 'mid', 'Mid'
    senior = 'senior', 'Senior'

class InterviewLanguage(TextChoices):
    en = 'en', 'English'
    pt_br = 'pt_br', 'Português Brasileiro'

class Question(models.Model):
    text = models.TextField()
    interview_type = models.CharField(max_length=255, choices=InterviewType.choices)
    level = models.CharField(max_length=255, choices=InterviewLevel.choices)

    answers = models.ManyToManyField('Answer', related_name='questions')    

class Answer(models.Model):
    text = models.TextField()
    is_correct = models.BooleanField()

class InterviewTheme(models.Model):
    name = models.CharField(max_length=255)
    interview_type = models.CharField(max_length=255, choices=InterviewType.choices)

class InterviewSubTheme(models.Model):
    name = models.CharField(max_length=255)
    interview_theme = models.ForeignKey('InterviewTheme', on_delete=models.CASCADE)

class Interview(models.Model):
    interview_type = models.CharField(max_length=255, choices=InterviewType.choices)
    level = models.CharField(max_length=255, choices=InterviewLevel.choices)
    themes = models.ManyToManyField('InterviewTheme', related_name='interviews')
    sub_themes = models.ManyToManyField('InterviewSubTheme', related_name='interview')


    questions = models.ManyToManyField('Question', related_name='interviews')

    is_spoken = models.BooleanField(default=False)

    def generate_questions(self, questions_number, interview_language):

        questions = self.questions.filter(
            interview_type=self.interview_type,
            level=self.level
        ).order_by('?')[:questions_number]

        # need to translate the questions and answers

        return questions