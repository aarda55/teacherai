const chatContainer = document.getElementById('chat');
const userInput = document.getElementById('user-input');

if ('speechSynthesis' in window) {
    var synth = window.speechSynthesis;
} else {
    console.error('SpeechSynthesis is not supported in this browser.');
}

function appendMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender);
    messageDiv.textContent = message;
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    if (sender === 'bot') {
        speakMessage(message);
    }
}

function speakMessage(message) {
    const utterance = new SpeechSynthesisUtterance(message);
    synth.speak(utterance);
}

function processUserInput() {
    const userMessage = userInput.value;
    appendMessage('user', userMessage);
    /*
    Future self continue with ML-logic here please
    */
    const botResponse = 'Bot: ' + userMessage;
    appendMessage('bot', botResponse);
    userInput.value = '';
}

userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        processUserInput();
    }
});