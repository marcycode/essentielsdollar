import React from 'react';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import storyvideo from '../assets/Essentials_Promo_Video.mp4';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Chatbox from './Chatbot';

const OurStory = () => {
  const handleShare = () => {
    const shareUrl = 'https://www.instagram.com/';

    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          url: shareUrl,
        })
        .then(() => console.log('Share successful'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
     
      console.log('Sharing not supported on this browser');
      
    }
  };

  return (
    <div>
      
      <Chatbox />
      <div className='fullcontent'>
        <div className='flex flex-col items-center'>
          <h1 className='text-center text-5xl font-bold text-black mb-5 mt-5'>
            Our Story
          </h1>
          <div
            className='flex justify-center mt-2 border-2 border-green-500 rounded-md overflow-hidden'
            style={{ maxWidth: '640px' }}
          >
            <ReactPlayer
              url={storyvideo}
              
              controls={true}
              width='100%'
              height='100%'
            
            />
          </div>
        </div>
        <div className='try text-center cursor-pointer' onClick={handleShare}>
          <h1 className='pr-2 pt-5 text-2xl'>Share<FontAwesomeIcon
            icon={faShare}
            size='1x'
            style={{marginLeft: '5px' }}
          />
          </h1>
        </div>
      </div>
      <div style={{ marginTop: '10em' }}></div>
      <Footer />
    </div>
  );
};

export default OurStory;
