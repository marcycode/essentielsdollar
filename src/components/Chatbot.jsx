import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FaArrowCircleRight } from 'react-icons/fa';

import { FiRotateCw } from "react-icons/fi";
import { ArrowClockwise } from 'react-bootstrap-icons';

import Draggable from 'react-draggable';
import { PRODUCTS } from '../products';

import { faRobot } from '@fortawesome/free-solid-svg-icons';
import './chatbox.css';

const Chatbox = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    
    const savedPosition = localStorage.getItem('chatboxPosition');
    if (savedPosition) {
      setPosition(JSON.parse(savedPosition));
    }
  }, []);

  useEffect(() => {
    
    localStorage.setItem('chatboxPosition', JSON.stringify(position));
  }, [position]);

  const handleDrag = (e, { x, y }) => {
    setPosition({ x, y });
  };

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
  };

  const MAX_CHARACTERS_PER_LINE = 30; 

  const splitMessageIntoLines = (message) => {
    const lines = [];
    let currentLine = '';
    const words = message.split(' ');

    for (const word of words) {
      if (currentLine.length + word.length + 1 <= MAX_CHARACTERS_PER_LINE) {
        currentLine += ` ${word}`;
      } else {
        lines.push(currentLine.trim());
        currentLine = word;
      }
    }

    if (currentLine.trim() !== '') {
      lines.push(currentLine.trim());
    }

    return lines;
  };
  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage = inputValue.toLowerCase();
    const newMessage = {
      text: inputValue,
      sender: 'user',
    };
    const handleInputKeyDown = (e) => {
      if (e.key === 'Enter') {
        handleSendMessage();
      }
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    let responseMessage = '';
    if (userMessage.includes('how are you')) {
      responseMessage = 'I am doing well, thank you!';
    } else if (userMessage.includes('help')) {
      responseMessage = 'Sure, I am here to help. How can I assist you?';
    } else if (userMessage.includes('what time is the store open')) {
      responseMessage = 'We are open from Monday - Fridays: 8am - 4pm';
    } else if (userMessage.includes('how much are oranges worth')) {
      responseMessage = 'The oranges are worth $20';
    } else if (userMessage.includes('food')) {
    
      const fruits = PRODUCTS.filter((product) => product.category === 'Fruits');
      const vegetables = PRODUCTS.filter((product) => product.category === 'Vegetables');

      responseMessage = `We currently sell ${fruits.length} types of fruits and ${vegetables.length} types of vegetables.`;
    } else if (userMessage.includes('cutlery')) {
      
      const utensils = PRODUCTS.filter((product) => product.category === 'Utensils');

      responseMessage = `We currently sell ${utensils.length} types of utensils including Pots, Utensils, Cups, Plates.`;
    } else if (userMessage.includes('pots worth')) {
     
      const potProduct = PRODUCTS.find((product) => product.productName.toLowerCase().includes('pot'));
      responseMessage = potProduct
        ? `The Pots are worth $${potProduct.price}`
        : "Sorry, we don't have Pots in stock.";
    } else if (userMessage.includes('utensils worth')) {
      
      const utensilsProduct = PRODUCTS.find((product) => product.category === 'Utensils');
      responseMessage = utensilsProduct
        ? `The Utensils are worth $${utensilsProduct.price}`
        : "Sorry, we don't have Utensils in stock.";
    } 
    else if (userMessage.includes('interview')){
      responseMessage = 'We are currently hiring, go to the Hiring Page to find out more info'


    }
      else {
      responseMessage = 'Type in food or cutlery for more info';
    }

    setTimeout(() => {
      const chatbotMessage = {
        text: responseMessage,
        sender: 'chatbot',
      };

      setMessages((prevMessages) => [...prevMessages, chatbotMessage]);
    }, 500);
  };

  const handleClearMessages = () => {
    setMessages([]);
  };

  return (
    <Draggable position={position} onDrag={handleDrag}>
      <div className="fixed bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center bg-green-700 text-white px-4 py-2 rounded-t-lg">
          <h3 className="text-lg font-bold j">
            <b className='mr-3 font-normal'>Essential Helper</b>
            <FontAwesomeIcon icon={faRobot}></FontAwesomeIcon>
          </h3>
          <button onClick={handleClearMessages} className='text-lg font-extrabold'>
            <ArrowClockwise />
          </button>
        </div>
        <div className="p-4 max-h-52 overflow-y-auto" style={{ maxHeight: '200px' }}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${message.sender === 'user' ? 'text-right' : 'text-left'} mb-2`}
            >
              <span
                className={`${message.sender === 'user'
                  ? 'bg-gray-200 rounded-tl-lg rounded-br-lg'
                  : 'bg-green-200 rounded-tr-lg rounded-bl-lg'
                  } px-3 py-2 inline-block`}
              >
                {message.sender === 'chatbot' ? (
                  splitMessageIntoLines(message.text).map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))
                ) : (
                  message.text
                )}
              </span>
            </div>
          ))}
        </div>
        <div className="flex p-2">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputValueChange}
            onKeyDown={handleInputKeyDown}
            className="flex-grow bg-gray-100 px-3 py-2 rounded-l-lg focus:outline-none"
            placeholder="How can I help you?"
          />
          <button
            onClick={handleSendMessage}
            className="bg-green-500 text-white px-4 py-2 rounded-r-lg"
          >
            Send
          </button>
        </div>
      </div>
    </Draggable>
  );
};

export default Chatbox;
