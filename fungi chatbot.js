const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatContainer = document.getElementById('chat-container');

sendButton.addEventListener('click', () => {
    const userMessage = messageInput.value;
    if (userMessage.trim() !== '') {
        appendUserMessage(userMessage);
        getBotResponse(userMessage);
        messageInput.value = '';
    }
});

function appendUserMessage(message) {
    const userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('message', 'user-message');
    userMessageDiv.textContent = message;
    chatContainer.appendChild(userMessageDiv);
}

function appendBotMessage(message) {
    const botMessageDiv = document.createElement('div');
    botMessageDiv.classList.add('message');
    botMessageDiv.textContent = message;
    chatContainer.appendChild(botMessageDiv);
}

function getBotResponse(userMessage) {
    // Simulate bot response (replace with actual response logic)
    const botResponse = simulateBotResponse(userMessage);
    appendBotMessage(botResponse);
}

function simulateBotResponse(userMessage) {
    const responses = [
        "Sure, there are many fascinating types of fungi such as mushrooms, molds, and yeasts.",
        "Did you know that some fungi play a crucial role in breaking down organic matter in ecosystems?",
        "If you have any more questions about fungi, feel free to ask!",
        "Fungi are also used in food production and medicine. Would you like to know more?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}
