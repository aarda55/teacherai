const chatContainer = document.getElementById('chat');
const userInput = document.getElementById('user-input');

function appendMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender);
    messageDiv.textContent = message;
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function processUserInput() {
    const userMessage = userInput.value;
    appendMessage('user', userMessage);
    /*
    Future self continue with ML-logic here please
    */
    appendMessage('bot', 'Bot: ' + userMessage);
    userInput.value = '';
}

userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        processUserInput();
    }
});