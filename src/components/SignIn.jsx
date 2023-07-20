import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Chatbox from './Chatbot';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const users = JSON.parse(localStorage.getItem('users')) || [];

    
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
    
      setAlertMessage(`You are successfully signed in, ${user.username}`);
      setAlertType('success');
      setShowAlert(true);

      window.location.href = '/';
    } else {
     
      setAlertMessage('Invalid username or password');
      setAlertType('error');
      setShowAlert(true);
    }
  };

  return (
    <div>
      
      <Chatbox/>
      <div className="flex justify-center items-center h-screen pb-10">
        <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-4xl font-bold mb-6">Sign In</h2>
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
              <label htmlFor="username" className="block text-4sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Enter your username"
                className="mt-1 px-4 py-2 w-full text-4sm border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-4sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                className="mt-1 px-4 py-2 text-4sm w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mt-2 p-2 text-sm cursor-pointer">
              <h1>
                New to <b className="text-green-500">Essentiels?</b>
                <Link to="/signup"> <b>Create Account</b></Link>
              </h1>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
