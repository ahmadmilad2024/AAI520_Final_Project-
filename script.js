function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    
    if (userInput === "") return;  // Prevent sending empty messages

    addMessageToChat(userInput, "user-message");  // Add user message to chat

    // Call backend Flask API
    fetch("http://127.0.0.1:5000/chatbot", {  // Correct Flask API route
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt: userInput })  // Send user input to backend
    })
    .then(response => response.json())
    .then(data => {
        const botResponse = data.response;
        addMessageToChat(botResponse, "bot-message");  // Add bot message to chat
    })
    .catch(error => console.error("Error:", error));

    document.getElementById("user-input").value = "";  // Clear input field
}

function addMessageToChat(message, messageType) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.className = `message ${messageType}`;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to the bottom of chat box
}
