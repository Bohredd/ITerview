# Generated by Django 5.1.3 on 2024-11-23 22:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plans', '0008_userplan_changed_at_userplan_end_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userplan',
            name='changed_at',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
    ]
