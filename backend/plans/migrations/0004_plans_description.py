# Generated by Django 5.1.3 on 2024-11-22 03:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plans', '0003_alter_plans_max_interview_participations'),
    ]

    operations = [
        migrations.AddField(
            model_name='plans',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
    ]
