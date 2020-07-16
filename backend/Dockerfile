FROM python:3.7

RUN apt-get update

WORKDIR /app

COPY . /app

RUN PIP install --no-cache-dir -r requirements.txt
