web: sh -c "python backend/manage.py migrate && npm run dev --prefix frontend & gunicorn backend.wsgi:application --bind 0.0.0.0:8000"
