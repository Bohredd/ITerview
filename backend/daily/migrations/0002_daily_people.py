# Generated by Django 5.1.3 on 2024-11-17 21:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('daily', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='daily',
            name='people',
            field=models.ManyToManyField(to='daily.person'),
        ),
    ]
