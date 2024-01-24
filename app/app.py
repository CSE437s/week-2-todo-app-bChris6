from flask import Flask, render_template, request, jsonify, session,send_from_directory


app = Flask(__name__)
app.secret_key = 'chicken'


@app.route('/')
def home():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)