import Header from './Header.js';
import ChatArea from './ChatArea.js';
import UserInput from './UserInput.js';
import { ChatMessage } from './ChatMessage.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    // 헤더, 채팅 영역, 사용자 입력을 포함하여 앱 초기화
    app.innerHTML = `${Header()} ${ChatArea()} ${UserInput()}`;

    const sendBtn = document.getElementById('send-btn');
    const messageInput = document.getElementById('message-input');
    const chatArea = document.getElementById('chat-area');
    const exitImg = document.getElementById('exit');

    function scrollToBottom() {
        chatArea.scrollTop = chatArea.scrollHeight;
    }

    sendBtn.addEventListener('click', () => {
        const messageText = messageInput.value.trim();
        if (messageText) {
            // 사용자 메시지 추가
            const userMessage = ChatMessage({ sender: 'user', text: messageText });
            chatArea.insertAdjacentHTML('beforeend', userMessage);
            messageInput.value = '';

            // 챗봇 응답 추가
            setTimeout(() => {
                const chatbotMessage = ChatMessage({ sender: 'chatbot', text: '챗봇의 응답입니다.' });
                chatArea.insertAdjacentHTML('beforeend', chatbotMessage);
                scrollToBottom(); // 스크롤을 아래로 이동
            }, 1000);

            // 스크롤을 하단으로 이동
            scrollToBottom();
        }
    });

    exitImg.addEventListener('click', () => {
        window.location.href = 'https://www.youtube.com'; // 메인 페이지로 이동
    });

    // 메시지 입력창의 동적 크기 조정
    messageInput.addEventListener('input', function() {
        this.style.height = 'auto'; // 높이를 초기화
        this.style.height = `${Math.min(this.scrollHeight, parseInt(getComputedStyle(this).maxHeight))}px`; // 현재 내용에 맞춰 높이 조정, 최대 높이 제한
    });

    // 초기 스크롤을 하단으로 이동
    scrollToBottom();
});