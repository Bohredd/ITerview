import os
from celery import Celery
from decouple import config

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")

app = Celery("backend")

app.conf.update(
    broker_url=config("CELERY_BROKER_URL"),
    result_backend=config("CELERY_RESULT_BACKEND"),
    accept_content=["json"],
    task_serializer="json",
    result_serializer="json",
    result_persistent=True,
    task_reject_on_worker_lost=True,
    timezone="America/Sao_Paulo",
    task_acks_late=True,
    task_track_started=True,
)

app.autodiscover_tasks()
