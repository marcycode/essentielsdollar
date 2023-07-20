import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Chatbox from './Chatbot';

const Checkout = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value.trim();
    const lastName = e.target.lastName.value.trim();
    const creditCard = e.target.creditCard.value.trim();
    const phoneNumber = e.target.phoneNumber.value.trim();

    if (!firstName || !lastName || !creditCard || !phoneNumber) {
      setFormError('Please fill in all fields.');
      return;
    }

  
    setFormError('');
    setIsSubmitted(true);

   
    e.target.reset();
  };

  return (
    <div>
      <Chatbox />
      <div className="flex justify-center items-center h-screen pb-10">
        <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-4xl font-bold mb-6">Checkout</h2>
          {isSubmitted ? (
            <div className="text-green-500 font-bold mb-6">Thank you for your purchase!</div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-4sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your First Name"
                    className="mt-1 px-4 py-3 w-full text-4sm border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-4sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your Last Name"
                    className="mt-1 px-4 py-3 w-full text-4sm border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="creditCard" className="block text-4sm font-medium text-gray-700">
                    Credit Card Information
                  </label>
                  <input
                    type="text"
                    id="creditCard"
                    name="creditCard"
                    placeholder="---"
                    className="mt-1 px-4 py-3 w-full text-4sm border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block text-4sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="mt-1 px-4 py-3 w-full text-4sm border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  />
                </div>
              </div>
              {formError && <div className="text-red-500 font-bold mb-6">{formError}</div>}
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 mt-4"
              >
                Purchase
              </button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
