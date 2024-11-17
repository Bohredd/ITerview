from django.db import models
from django.db.models import TextChoices


class PersonRole(TextChoices):
    TECH_LEAD = 'Tech Lead', 'Tech Lead'
    DEVELOPER = 'Developer', 'Developer'
    QUALITY_ASSURANCE = 'Quality Assurance', 'Quality Assurance'
    PROJECT_MANAGER = 'Project Manager', 'Project Manager'
    PRODUCT_OWNER = 'Product Owner', 'Product Owner'
    SCRUM_MASTER = 'Scrum Master', 'Scrum Master'
    DESIGNER = 'Designer', 'Designer'

class Voices(TextChoices):
    andrew = 'Microsoft Andrew Online (Natural) - English (United States)', 'Microsoft Andrew Online (Natural) - English (United States)' # man
    alonso = 'Microsoft Alonso Online (Natural) - Spanish (United States)', 'Microsoft Alonso Online (Natural) - Spanish (United States)' # man
    michelle = 'Microsoft Michelle Online (Natural) - English (United States)', 'Microsoft Michelle Online (Natural) - English (United States)' # woman
    steffen = 'Microsoft Steffan Online (Natural) - English (United States)', 'Microsoft Steffan Online (Natural) - English (United States)' # man
    roger = 'Microsoft Roger Online (Natural) - English (United States)', 'Microsoft Roger Online (Natural) - English (United States)' # man
    guy = 'Microsoft Guy Online (Natural) - English (United States)', 'Microsoft Guy Online (Natural) - English (United States)' # man
    ava = 'Microsoft AvaMultilingual Online (Natural) - English (United States)', 'Microsoft AvaMultilingual Online (Natural) - English (United States)' # woman

class Person(models.Model):
    name = models.CharField(max_length=50)
    role = models.CharField(max_length=50, choices=PersonRole.choices)

    is_you = models.BooleanField(default=False)
    voice = models.CharField(max_length=255, choices=Voices.choices, null=True, blank=True)
    image = models.TextField(null=True, blank=True) # image url to person
    
    def __str__(self):
        return f"{self.name} ({self.role})"

class ProbablyAnswer(models.Model):
    answer = models.TextField()
    is_correct = models.BooleanField(default=False)

    # if user dont correct answer, we can give a penalty speech
    penality = models.TextField(blank=True, null=True)
    who_says_penality = models.ForeignKey(Person, on_delete=models.CASCADE, blank=True, null=True)

class Information(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()

class Speech(models.Model):
    order = models.IntegerField()
    speaker = models.ForeignKey(Person, on_delete=models.CASCADE)
    content = models.TextField()

    is_question = models.BooleanField(default=False)

    is_to_you = models.BooleanField(default=False)

    probably_answers = models.ManyToManyField(ProbablyAnswer, blank=True, null=True)

    information = models.ForeignKey(Information, on_delete=models.CASCADE, blank=True, null=True)

class Daily(models.Model):

    # project name
    project_name = models.CharField(max_length=255)

    # project description
    project_description = models.TextField()

    # project team
    speeches = models.ManyToManyField(Speech)

    # you 
    you = models.ForeignKey(Person, on_delete=models.CASCADE, related_name='you')

    # your atributions
    your_atributions = models.TextField()