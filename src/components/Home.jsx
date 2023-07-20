import React from 'react';
import { useState } from 'react'


import Navbar from './Navbar'
import Hero from './Hero.jsx'


import Footer from './Footer';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import SignIn from './SignIn'
import Chatbox from './Chatbot';


const Home = () => {
  return (
    <div>
      
        <Chatbox/>
        <Hero/>
        <Footer/>
    </div>
  )
}

export default Home