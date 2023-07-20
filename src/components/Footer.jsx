import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faHouse, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FaVideo } from 'react-icons/fa';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faVideo as faVideoSolid } from '@fortawesome/free-solid-svg-icons';
import { faCamera as faCameraSolid } from '@fortawesome/free-solid-svg-icons';
import taro from '../assets/taro.png';
import './Footer.css';

const Footer = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguage = () => {
    setIsEnglish((prevValue) => !prevValue);
  };

  return (
    <footer className="footer mt-10">
      <div className="flex flex-wrap p-8">
        <div className="ml-8 flex justify-center w-full pl-4">
          <h1 className="pb-2 pr-5">
            <a
              href="https://www.google.com/maps/uv?pb=!1s0x4cce1b3b5448b661%3A0xc04cd5fc8c8f4b51!3m1!7e115!4s%2Fmaps%2Fplace%2Fessentiels%2Bdollar%2Bgatineau%2F%4045.4845703%2C-75.6417877%2C3a%2C75y%2C181.73h%2C90t%2Fdata%3D*213m4*211e1*213m2*211sOMgDXZM4ujwZmed08gq64A*212e0*214m2*213m1*211s0x4cce1b3b5448b661%3A0xc04cd5fc8c8f4b51%3Fsa%3DX%26ved%3D2ahUKEwiPprvfzu7_AhVeFlkFHYJNAukQpx96BAgzEAA!5sessentiels%20dollar%20gatineau%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e2!2sOMgDXZM4ujwZmed08gq64A&hl=en&sa=X&ved=2ahUKEwiPprvfzu7_AhVeFlkFHYJNAukQpx96BAhGEA0"
              target="_blank"
              className="address"
            >
              <FontAwesomeIcon
                icon={faHouse}
                className={`pr-2 tx-lg mt-1 ${!isEnglish ? '' : ''}`}
              />{' '}
              {isEnglish ? '366 Boulevard Maloney Est, Gatineau, QC' : '366 Boulevard Maloney Est, Gatineau, QC'}
            </a>
            <div className="flex flex-col">
              <h1 className="address">
                <FontAwesomeIcon icon={faClock} className={`pr-1 tx-lg ${!isEnglish ? '' : ''}`} />{' '}
                {isEnglish ? 'Monday-Saturday: 9am-6pm' : 'Lundi-Samedi: 9h à 18h'}
              </h1>
            </div>
          </h1>
          <h1 className="pl-4 pb-2 pr-8">
            <a href="tel:6138574553" className="phonenumber">
              <FontAwesomeIcon
                icon={faPhone}
                className={`pr-2 tx-lg mt-1 ${!isEnglish ? '' : ''}`}
              />
              {isEnglish ? '613-857-4553' : '613-857-4553'}
            </a>
            <div className="flex flex-col">
              <h1 className="address">
                <FontAwesomeIcon
                  icon={faVideoSolid}
                  className={`pr-1 tx-lg ${!isEnglish ? '' : ''}`}
                />
                <Link to="ourstory">
                  {isEnglish ? 'Our Story: Through the Lens' : 'Notre histoire: Video'}
                </Link>
              </h1>
            </div>
          </h1>
          <h1 className="">
            <a href="mailto:essentiels1dollar@gmail.com" className="phonenumber">
              <FontAwesomeIcon
                icon={faMailBulk}
                className={`pr-2 tx-lg mt-1 ${!isEnglish ? '' : ''}`}
              />
              {isEnglish ? 'essentiels1dollar@gmail.com' : 'essentiels1dollar@gmail.com'}
            </a>
            <div className="flex flex-col mt-2">
              <h1 className="flex flex-col">
                <span className="flex flex-row">
                  <a href="" className="icons pl-10 ml-14 pr-3">
                    <FaFacebook />
                  </a>
                  <a href="" className="icons pr-3">
                    <FaWhatsapp />
                  </a>
                  <a href="" className="icons ">
                    <FaInstagram />
                  </a>
                </span>
              </h1>
            </div>
          </h1>
          <div>
            <button className="hero-btn ml-10" onClick={toggleLanguage}>
              {isEnglish ? 'French' : 'Anglais'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
