web: python manage.py makemigrations && python manage.py migrate && python manage.py runserver 0.0.0.0:8000
frontend: npm run dev
celery: celery -A backend.celery_config.app worker --loglevel=info
celery-beat: celery -A backend.celery_config.app beat --loglevel=info
