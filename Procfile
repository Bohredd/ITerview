web: gunicorn backend.backend.wsgi --bind 0.0.0.0:8000 --log-file -
web: python backend/manage.py makemigrations && python backend/manage.py migrate && gunicorn backend.backend.wsgi --bind 0.0.0.0:8000