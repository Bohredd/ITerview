FROM python:3.12-slim-bullseye AS backend

WORKDIR /app

RUN apt-get update && apt-get install -y build-essential libpq-dev netcat

COPY ./backend/requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

COPY . /app/

ENV PYTHONUNBUFFERED=1