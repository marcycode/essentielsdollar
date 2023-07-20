import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cutleries from './pages/shop/cutleries';
import SignIn from './components/SignIn';



import Contact from './components/Contact';
import CartPage from './components/CartPage';
import ErrorPage from "./components/ErrorPage";
import Shop from './pages/shop/shop';

import { ShopContextProvider } from './context/shop-context';

import SignUp from "./components/SignUp"
import SubscribeForm from './components/SubscribeForm';
import OurStory from './components/OurStory.jsx'
import HiringPage from "./components/HiringPage.jsx"
import Cart from './pages/cart/cart';

const App = () => {
  
  

  return (
    <ShopContextProvider>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path = "/hiring" element={<HiringPage/>}/>
        <Route path = "/contact" element={<Contact/>}/>
       
        <Route path = "/cutlery" element={<Cutleries/>}/>
        <Route path = "checkout" element={<Checkout/>}/>
        <Route path = "/signup" element={<SignUp/>}/>
        
        <Route path = "/products" element={<Shop/>}/>
        <Route path="*" element={<ErrorPage/>} />
        <Route path = "/subscribe" element={<SubscribeForm/>}/>
        <Route path = "/ourstory" element={<OurStory/>}/>
        <Route path = "/cart" element={<Cart/>}/>
      </Routes>
    </Router>

    </ShopContextProvider>
  
  );
};

export default App;
