import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { Arrow90degLeft } from 'react-bootstrap-icons';

import errorimage from "../assets/logofrownface.png"
import Footer from './Footer';
const ErrorPage = () => {
  return (

    <div>
     
      <div className="flex flex-col items-center h-screen">
        <img src={errorimage} alt="Error Image" className='mb-4 mt-4'/>
      <h2 className="text-4xl font-bold mb-4 mt-9">Oops! Something went wrong.</h2>
      <p className="text-lg mb-4">We apologize for the inconvenience.</p>
      <Link to="/" className="btn bg-green-500 pt-1 pb-1 pl-2 pr-2 rounded-full text-white">
         Go to Home Page 
      </Link>
    </div>
      
      

    </div>
  );
};

export default ErrorPage;
