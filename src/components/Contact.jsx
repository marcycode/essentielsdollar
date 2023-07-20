import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Footer from './Footer';
import Navbar from './Navbar';
import Chatbox from './Chatbot';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!firstName || !lastName || !email || !message) {
      setAlertMessage('Please fill in all the fields.');
      setAlertType('error');
      setShowAlert(true);
      return;
    }

    if (!email.includes('@')) {
      setAlertMessage('Please enter a valid email address.');
      setAlertType('error');
      setShowAlert(true);
      return;
    }

   
    setAlertMessage(`Thank you, ${firstName}! Your message has been sent.`);
    setAlertType('success');
    setShowAlert(true);

   
  };

  const busiestStoreHoursData = [
    { hour: '8 AM', customers: 50 },
    { hour: '10 AM', customers: 30 },
    { hour: '12 PM', customers: 70 },
    { hour: '2 PM', customers: 45 },
    { hour: '4 PM', customers: 60 },
    { hour: '6 PM', customers: 80 },
  ];

  return (
    <div>
      <Chatbox />
      <div className="flex justify-center items-center h-screen pb-10">
        {/* Bar Chart on the left */}
        <div style={{ width: '50%', marginRight: '20px' }}>
          <h2 className="text-3xl  mb-6 text-center">Store Hours</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={busiestStoreHoursData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="customers" fill="#008037" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Form on the right */}
        <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          {showAlert && (
            <div
              className={`mb-4 p-4 rounded-md ${
                alertType === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
              }`}
            >
              {alertMessage}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-4sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
                placeholder="Enter your first name"
                className="mt-1 px-4 py-2 w-full text-4sm border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-4sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={handleLastNameChange}
                placeholder="Enter your last name"
                className="mt-1 px-4 py-2 w-full text-4sm border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-4sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email address"
                className="mt-1 px-4 py-2 w-full text-4sm border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-4sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleMessageChange}
                placeholder="Enter your message"
                rows="4"
                className="mt-1 px-4 py-2 w-full text-4sm border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className='mt-20'>
        <Footer />

      </div>
      
    </div>
  );
};

export default Contact;
