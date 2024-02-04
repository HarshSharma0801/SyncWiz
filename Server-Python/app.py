from flask import Flask , jsonify , request
from flask_restful import Api, Resource , reqparse , abort
from flask_cors import CORS
from dotenv import load_dotenv , find_dotenv
from pymongo import MongoClient
from bson import json_util
from bson import ObjectId
import os
app = Flask(__name__)
CORS(app)
api = Api(app)

load_dotenv()

MongoString = os.getenv("MONGO_URL")
client = MongoClient(MongoString)
db = client.get_database()

tasks_collection = db['userdetails']

@app.route('/read', methods=['GET'])
def get_User():
    tasks = list(tasks_collection.find())
    return jsonify({'data': json_util.dumps(tasks)})

@app.route('/add', methods=['POST'])
def create_User():
    data =  request.json
    print(data)
    tasks_collection.insert_one(data)
    return {'data':'added'}

@app.route('/edit/<string:userId>', methods=['GET'])
def edit_User(userId):
    mainId = ObjectId(userId)
    task = tasks_collection.find_one({'_id':mainId})
    print(task)
    return jsonify({'data': json_util.dumps(task)})

@app.route('/edit/<string:userId>', methods=['POST'])
def update_User(userId):
    data =  request.json
    mainId = ObjectId(userId)
    tasks_collection.update_one({'_id': mainId}, {'$set': {'name':data.get('name') , 'YourQuote':data.get('YourQuote') , }})
    return {'data':'updated'}

@app.route('/delete', methods=['POST'])
def delete_User():
    data =  request.json
    mainId = ObjectId(data.get('id'))
    tasks_collection.delete_one({'_id':mainId})
    return {'data':'deleted'}

if __name__ == '__main__':
 app.run( port=5000,debug=True)


