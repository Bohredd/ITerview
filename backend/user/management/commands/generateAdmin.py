from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
import os

class Command(BaseCommand):
    help = "Creates an admin user if it does not exist"

    def handle(self, *args, **kwargs):
        username = "admin"
        email = "admin@bohreddev.com"
        password = os.environ["DJANGO_SUPERUSER_PASSWORD"]

        if not User.objects.filter(username=username).exists():
            User.objects.create_superuser(
                username=username, email=email, password=password
            )
            self.stdout.write(
                self.style.SUCCESS(f"Successfully created admin user: {username}")
            )
        else:
            self.stdout.write(
                self.style.WARNING(f'Admin user "{username}" already exists')
            )
