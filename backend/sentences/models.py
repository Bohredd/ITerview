from django.db import models

class Sentences(models.Model):
    sentence = models.CharField(max_length=255)
    translation_ptbr = models.CharField(max_length=255)