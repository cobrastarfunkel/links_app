from flask import Flask, session
from flask_session import Session
import logging

app = Flask(__name__, instance_relative_config=False)
app.config.from_object('config.Config')
Session(app)


@app.route("/hello")
def hello():
    session['hello'] = "Hello Set!"
    return {'hello': "Hello, World!!"}


@app.route("/isSet")
def isSet():
    return session.get('hello', "It is not Set")


if __name__ == '__main__':
    app.run()
