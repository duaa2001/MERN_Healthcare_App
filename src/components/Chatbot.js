// start with basic chatbot
// ans.includes(blahblah), go to blah blah

// make it more complex as diving deeper into project 

import React, { useState } from 'react';

const Chatbot = () => {
    const [output, setOutput] = useState('');
    const [input, setInput] = useState('');


const handleMessage = () => {
    // Set chatbot's response
    setOutput(getResponse(input));
    
    // Clear the input
    setInput('');
};

//Basic Chatbot response set up
const getResponse = (message) => {
    if (message.toLowerCase().includes('hello')) {
        return 'Hello! How may I help you today?';
    } else if (message.toLowerCase().includes('help')) {
        return 'Sure! What do you need help with?';
    } 
    else if (message.toLowerCase().includes('information')) {
        return 'Be sure to check out our FAQ page and resources tabs for more info!';
    } 
    else if (message.toLowerCase().includes('symptoms')|| message.toLowerCase().includes('assessment')) {
        return 'You can check out the self-assessments tab to check your symptoms';
    }
    else if (message.toLowerCase().includes('question')) {
        return 'If you have a specific question about your health, you can post it on threads!';
    }
    else {
        return 'Sorry, I did not understand that. Can you try again?';
    }
};


// Takes in input, sends back output based on that and clears input 
return (
    <div>
        <h3>Introducing our Chat Bot...</h3>
    <div className="chatbot-container">
        <div className="chatbot-output">
            <p>{output}</p>
        </div>
        <div className="chatbot-input">
            <input
                type="text"
                placeholder="say hello to start"
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
            />
            <button onClick={handleMessage}>Click to send</button>
        </div>
    </div>
    </div>
);
};

export default Chatbot;
