from flask import Flask, session, request
from flask_session import Session
from flask_cors import CORS
import logging

app = Flask(__name__, instance_relative_config=False)
app.config.from_object('config.Config')
Session(app)
CORS(app, resources={r'/api/*': {"origins": "*"}})


@app.route("/hello")
def hello():
    session['hello'] = "Hello Set!"
    return {'hello': "Hello, World!!"}


@app.route("/isSet")
def isSet():
    return session.get('hello', "It is not Set")


@app.route("/api/register", methods=['POST'])
def register_new_user():
    user_data = request.json
    return {"From API": user_data}


if __name__ == '__main__':
    app.run()
