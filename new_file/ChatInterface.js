import React, { useState } from 'react';

function ChatInterface() {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (message) => {
        // Here you would call the function to send the message to the OpenAI API
        // and then update the `messages` state with the response.
    };

    return (
        <div>
            <h2>AI Chat</h2>
            <div>
                {messages.map((message, index) => (
                    <p key={index}>{message}</p>
                ))}
            </div>
            <input type="text" onKeyPress={(event) => {
                if (event.key === 'Enter') {
                    handleSendMessage(event.target.value);
                    event.target.value = '';
                }
            }} />
        </div>
    );
}

export default ChatInterface;
