import React, { useState, useEffect } from 'react';
import './Chatbot.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPaperclip, faMicrophone } from '@fortawesome/free-solid-svg-icons';

// Helper function to format time
const formatTime = (date) => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  // Retrieve messages from localStorage on component mount
  useEffect(() => {
    try {
      const savedMessages = JSON.parse(localStorage.getItem('chatMessages'));
      if (savedMessages && Array.isArray(savedMessages)) {
        setMessages(savedMessages);
      }
    } catch (error) {
      console.error('Error reading from localStorage:', error);
    }
  }, []);

  // Save messages to localStorage whenever the 'messages' state changes
  useEffect(() => {
    try {
      localStorage.setItem('chatMessages', JSON.stringify(messages));
      console.log('Messages saved to localStorage:', messages);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [messages]);

  // Scroll chat body to the bottom when messages update
  useEffect(() => {
    const chatBody = document.querySelector('.chat-body');
    if (chatBody) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }, [messages]);

  // Toggle the chat window open/close
  const toggleChat = () => setIsOpen(!isOpen);

  // Handle sending messages
  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;  // Prevent sending empty messages
    const newMessage = { sender: 'user', text: inputMessage, time: new Date() };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputMessage('');  // Clear input field

    // Simulate bot response after a delay
    setTimeout(() => {
      const botReply = { sender: 'bot', text: 'Hello', time: new Date() };
      setMessages((prevMessages) => [...prevMessages, botReply]);
    }, 500);
  };

  // Handle 'Enter' key press for sending messages
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbot-icon" onClick={toggleChat}>
        <img src={`${process.env.PUBLIC_URL}/images/chatbot-icon.png`} alt="Chatbot Icon" />
      </div>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-left">
              <img src={`${process.env.PUBLIC_URL}/images/ava.png`} alt="User" className="chat-avatar" />
              <h4>ManavBot</h4>
            </div>
            <button className="chat-close" onClick={toggleChat}>×</button>
          </div>

          <div className="chat-body">
            {messages.map((message, index) => (
              <div key={index} className={`message-container ${message.sender}-message`}>
                {message.sender === 'bot' ? (
                  <div className="bot-message-wrapper">
                    <div className="bot-message-content">
                      <img src={`${process.env.PUBLIC_URL}/images/ava2.png`} alt="Chatbot" className="bot-avatar" />
                      <div className="message-bubble bot-bubble">{message.text}</div>
                    </div>
                    <small className="message-time">{formatTime(new Date(message.time))}</small>
                  </div>
                ) : (
                  <div className="message-bubble user-bubble">{message.text}</div>
                )}
              </div>
            ))}
          </div>

          <div className="chat-footer">
            <input
              type="text"
              placeholder="Type a message..."
              className="chat-input"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <div className="chat-bar-icons">
              <button className="chat-send" onClick={handleSendMessage}>
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
              <FontAwesomeIcon icon={faPaperclip} className="chat-icon" />
              <FontAwesomeIcon icon={faMicrophone} className="chat-icon" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
