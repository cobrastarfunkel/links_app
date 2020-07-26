from os import environ
import redis


class Config:
    SECRET_KEY = b'_5#y2L"F4Q8z\n\xec]/'
    FLASK_APP = environ.get('FLASK_APP')
    FLASK_ENV = environ.get('FLASK_ENV')

    SESSION_TYPE = 'redis'
    SESSION_REDIS = redis.from_url('redis://redis:6379')

    SESSION_COOKIE_SECURE = True,
    SESSION_COOKIE_HTTPONLY = True,
    SESSION_COOKIE_SAMESITE = 'Lax'
