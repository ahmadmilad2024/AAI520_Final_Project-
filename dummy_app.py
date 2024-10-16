from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Example Python function that returns a chatbot response
def chatbot_response(user_input):
    # Simple logic for now
    if "hello" in user_input.lower():
        return "Hello! How can I assist you today?"
    else:
        return f"I'm sorry, I don't understand '{user_input}'. I'm still learning, but soon I'll be able to give even better responses!"

@app.route("/chatbot", methods=["POST"])
def chatbot():
    data = request.get_json()
    user_input = data['prompt']
    response = chatbot_response(user_input)
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)
