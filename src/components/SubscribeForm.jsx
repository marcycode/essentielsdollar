import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Chatbox from './Chatbot';
import emailjs from 'emailjs-com';

const SubscribeForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const serviceId = 'service_ukcglio';
  const templateId = 'template_x555akl';
  const userId = 'Ga6mCfBij5QMNG5jW';

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validate form fields
    if (!firstName || !lastName || !email) {
      setAlertMessage('Please fill in all the fields');
      setShowAlert(true);
      return;
    }
  
    // Prepare email parameters
    const templateParams = {
      to_name: `${firstName} ${lastName}`,
      email: email,
    };
  
    // Send email using Email.js
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then(() => {
        // Clear form fields
        setFirstName('');
        setLastName('');
        setEmail('');
  
        // Show confirmation message
        setAlertMessage('You will receive an email shortly!');
        setShowAlert(true);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setAlertMessage('Failed to send email. Please try again later.');
        setShowAlert(true);
      });
  };

  return (
    <div>
     
      <Chatbox/>
      <div className="flex justify-center items-center h-screen pb-40">
        <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-4xl font-bold mb-6">Subscribe to our Flyers!</h2>
          {showAlert && (
            <div className="mb-4 p-4 rounded-md bg-green-500 text-white">{alertMessage}</div>
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
                placeholder="Enter your First Name"
                className="mt-1 px-4 py-2 w-full text-4sm border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="lastName" className="block text-4sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={handleLastNameChange}
                placeholder="Enter your Last Name"
                className="mt-1 px-4 py-2 text-4sm w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-4sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your Email address"
                className="mt-1 px-4 py-2 text-4sm w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SubscribeForm;
