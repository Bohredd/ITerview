import os
from celery import Celery
from decouple import config
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")

app = Celery("iterview")

app.conf.update(
    broker_url=config("CELERY_BROKER_URL"),
    result_backend=config("CELERY_RESULT_BACKEND"),
    accept_content=["json"],
    task_serializer="json",
    result_serializer="json",
    timezone="UTC",
    result_persistent=True,
)

app.autodiscover_tasks()