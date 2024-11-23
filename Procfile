web: python .app/backend/manage.py migrate && gunicorn app.backend.wsgi:application --bind 0.0.0.0:8000 --log-file -
