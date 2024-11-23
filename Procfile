web: gunicorn backend.backend.wsgi --log-file -
web: python backend/manage.py makemigrations && python backend/manage.py migrate