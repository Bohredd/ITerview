# Generated by Django 5.1.3 on 2024-11-21 19:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sentences', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='sentences',
            name='translation_ptbr',
            field=models.CharField(default=0, max_length=255),
            preserve_default=False,
        ),
    ]
