from flask import Flask, jsonify
from business import get_data

app = Flask(__name__)

@app.route('/')
def home():
    return 'Flask backend is running!'

@app.route('/api/data', methods=['GET'])
def get_data_route():
    data = get_data()
    return jsonify({'data': data})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
