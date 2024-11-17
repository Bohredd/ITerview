backend: gunicorn backend.backend.wsgi:application --bind 0.0.0.0:8000 --log-file -
backend: python backend/manage.py makemigrations && python backend/manage.py migrate && python backend/manage.py runserver 0.0.0.0:8000
frontend: npm run dev --prefix frontend
