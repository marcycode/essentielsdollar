import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import SignIn from './SignIn';
import Chatbox from './Chatbot';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const user = {
      username,
      password,
    };

    
    saveUserToLocalStorage(user);

    setUsername('');
    setPassword('');
    setConfirmPassword('');

    window.location.href = '/signin';
  };

  const saveUserToLocalStorage = (user) => {
   
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    existingUsers.push(user);

    
    localStorage.setItem('users', JSON.stringify(existingUsers));
  };

  return (
    <div>
      
      <Chatbox/>
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-4xl font-bold mb-6">Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Enter your username"
                className="mt-1 px-4 py-2 w-full text-sm border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                className="mt-1 px-4 py-2 text-sm w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Confirm your password"
                className="mt-1 px-4 py-2 text-sm w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
            <div className="mt-2 p-2 text-sm cursor-pointer">
              <h1>
                Already have an account? <Link to="/signin" className="text-green-500">Sign In</Link>
              </h1>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default SignUp;
