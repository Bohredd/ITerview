# Generated by Django 5.1.3 on 2024-11-17 17:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('interview', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='interview',
            name='interview_type',
            field=models.CharField(choices=[('Tech', 'Technical'), ('Behavior', 'Behavioral')], max_length=255),
        ),
        migrations.AlterField(
            model_name='interview',
            name='level',
            field=models.CharField(choices=[('Junior', 'Junior'), ('Pleno', 'Pleno'), ('Senior', 'Senior')], max_length=255),
        ),
        migrations.AlterField(
            model_name='interviewtheme',
            name='interview_type',
            field=models.CharField(choices=[('Tech', 'Technical'), ('Behavior', 'Behavioral')], max_length=255),
        ),
        migrations.AlterField(
            model_name='question',
            name='interview_type',
            field=models.CharField(choices=[('Tech', 'Technical'), ('Behavior', 'Behavioral')], max_length=255),
        ),
        migrations.AlterField(
            model_name='question',
            name='level',
            field=models.CharField(choices=[('Junior', 'Junior'), ('Pleno', 'Pleno'), ('Senior', 'Senior')], max_length=255),
        ),
    ]
