document.addEventListener('DOMContentLoaded', () => {
    const sendBtn = document.getElementById('send-btn');
    const messageInput = document.getElementById('message-input');
    const chatArea = document.getElementById('chat-area');
    const exitBtn = document.getElementById('exit-btn');

    sendBtn.addEventListener('click', () => {
        const messageText = messageInput.value.trim();
        if (messageText) {
            addMessage('user', messageText);
            messageInput.value = '';


            setTimeout(() => {
                addMessage('chatbot', '챗봇의 응답입니다.');
            }, 1000);
        }
    });

    function addMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add(sender);
        messageDiv.textContent = text;
        chatArea.appendChild(messageDiv);
        chatArea.scrollTop = chatArea.scrollHeight;
    }

    exitBtn.addEventListener('click', () => {
        window.close();
    });
});