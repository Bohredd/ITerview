FROM python:3.12-slim-bullseye AS backend

WORKDIR /app

RUN apt-get update && apt-get install -y build-essential libpq-dev netcat curl

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && apt-get install -y nodejs

COPY ./backend/requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

COPY . /app/

ENV PYTHONUNBUFFERED=1

CMD ["bash", "-c", "python backend/manage.py makemigrations && python backend/manage.py migrate && python backend/manage.py runserver 0.0.0.0:8000 & cd frontend && npm install && npm run dev"]
