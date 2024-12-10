web: gunicorn backend.wsgi:application --bind 0.0.0.0:8000
migrate: python backend/manage.py migrate
frontend: npm start --prefix frontend
