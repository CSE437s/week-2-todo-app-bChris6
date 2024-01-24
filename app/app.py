from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
import certifi


app = Flask(__name__)
app.secret_key = 'chicken'
client = MongoClient(
    "mongodb+srv://chrisharry:imMUfedCpF2cAVRe@cluster0.su48ds0.mongodb.net/?retryWrites=true&w=majority", tlsCAFile=certifi.where())
db = client["Backend"]
todoCollection = db["Todo"]


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/add_todo', methods=['POST'])
def add_todo():
    todo_text = request.form.get('todo_text')
    if todo_text:
        todoCollection.insert_one({'text': todo_text})
        return jsonify({'status': 'success'})
    else:
        return jsonify({'status': 'error', 'message': 'Todo text is required'})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)