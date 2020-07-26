from flask import Flask, session, request, make_response, jsonify
from flask_session import Session
from flask_cors import CORS
import logging
from database.db import db
from bson.json_util import dumps
import pymongo

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
    new_user = db.users
    db.users.create_index([("username", pymongo.DESCENDING)], unique=True)
    try:
        result = new_user.insert_one(user_data)

        response = make_response(dumps(
            result, default=str), 200)
    except Exception as e:
        response = make_response(dumps(
            {f"Error Occured {e}"}, default=str), 500)
    return response


@app.route("/api/get_all")
def get_users():
    collection = db['users']
    cursor = collection.find({})

    return make_response(dumps(cursor), 200)


if __name__ == '__main__':
    app.run()
