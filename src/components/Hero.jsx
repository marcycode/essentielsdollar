import React from 'react';
import heroVideo from '../assets/Background_Video.mp4';
import { Link } from 'react-router-dom';
import { faUser, faCartShopping, faSearch, faFish, faWineGlass, faShoppingBasket,faVideo } from '@fortawesome/free-solid-svg-icons';
import './hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero = () => {
  return (
    <div className="h-screen relative">
      <video
        src={heroVideo}
        autoPlay
        muted
        loop
        className="h-full w-full object-cover"
      />
      <div className="h-full w-full flex flex-col justify-center items-center absolute top-0 left-0">
        <h1 className="text-5xl text-white font-bold mb-8">
          Essential 1$+
        </h1>
        <h2 className="text-2xl text-white mb-8">
          Made for a taste from back home
        </h2>
        <div className="flex">
          <Link to="/products" className='mr-3'>
            <button className="herobtn">
              <FontAwesomeIcon icon={faCartShopping} className='mr-2'/>Explore Products
            </button>
          </Link>
          <Link to="/ourstory">
            <button className="herobtn">
            <FontAwesomeIcon icon={faVideo} className='mr-2'/>Our Story
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
