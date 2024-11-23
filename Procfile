web: gunicorn backend.backend.wsgi:application --bind 0.0.0.0:8000 --log-file -
web: python backend/manage.py migrate && gunicorn backend.backend.wsgi:application --bind 0.0.0.0:8000