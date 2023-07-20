import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faSearch, faFish, faWineGlass, faShoppingBasket,faContactBook } from '@fortawesome/free-solid-svg-icons';
import { FaShoppingBasket } from 'react-icons/fa';
import './navbar.css';

import logo from '../assets/storelogo.png';

const Navbar = ({ user }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryHover = (category) => {
    setActiveCategory(category);
  };

  const handleNavMouseLeave = () => {
    setActiveCategory(null);
  };

  return (
    <nav className="bg-green-600 border-gray-200 dark:bg-gray-900 relative z-20" onMouseLeave={handleNavMouseLeave}>
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-8">
        <h1 className="flex items-center">
          <img src={logo} className="h-12 w-12 mr-3" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">
            <Link to="/">Essentiels 1$+</Link>
          </span>
        </h1>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Main menu</span>
        </button>
       
        <div className="hidden w-full md:block md:w-auto flex justify-end" id="navbar-default">
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8">
            <li className="flex flex-column">
              <div className="relative group ">
                <button
                  className={`bg-white text-green-500 text-sm rounded-md animatey pl-7 pt-1 pb-1 pr-5 mr-8 ${
                    activeCategory === 'food' ? 'text-green-600' : ''
                  }`}
                  onMouseEnter={() => handleCategoryHover('food')}
                >
                  <Link to="/products">
                    Food <FontAwesomeIcon className="ml-1 mr-2" icon={faShoppingBasket} />
                  </Link>
                </button>
                <ul
                  className={`absolute ${
                    activeCategory === 'food' ? 'block' : 'hidden'
                  } mt-2 ml-3 w-full bg-white rounded-md shadow-md text-gray-700`}
                >
                  <li className="px-4 py-2 hover:text-green-500">
                    <Link to="/products">Fruits</Link>
                  </li>
                  <li className="px-4 py-2 hover:text-green-500">
                    <Link to="/products">Vegetables</Link>
                  </li>
                  <li className="px-4 py-2 hover:text-green-500">
                    <Link to="/products">Meat</Link>
                  </li>
                </ul>
              </div>
              <div className="relative group">
                <button
                  className={`bg-white text-green-500 text-sm pt-1 pb-1 animatey rounded-md pl-7 pr-5 mr-8 ${
                    activeCategory === 'cutlery' ? 'text-green-600' : ''
                  }`}
                  onMouseEnter={() => handleCategoryHover('cutlery')}
                >
                  <Link to="/cutlery">
                    Cutlery<FontAwesomeIcon className="ml-1 mr-2" icon={faWineGlass} />
                  </Link>
                </button>
                <ul
                  className={`absolute ${
                    activeCategory === 'cutlery' ? 'block' : 'hidden'
                  } mt-2 ml-10 pr-4 w-full bg-white rounded-md shadow-md text-gray-700`}
                >
                  <li className="px-4 py-2 hover:text-green-500">
                    <Link to="/cutlery">Utensils</Link>
                  </li>
                  <li className="px-4 py-2 hover:text-green-500">
                    <Link to="/cutlery">Plates</Link>
                  </li>
                  <li className="px-4 py-2 hover:text-green-500">
                    <Link to="/cutlery">Glasses</Link>
                  </li>
                </ul>
              </div>
              <div className='relative group'>
              <button
                  className={`bg-white text-green-500 text-sm pt-1 pb-1  rounded-md pl-2 pr-2 mr-8 animatey`}
                  
                ><Link to = "/contact">
                  Contact Us<FontAwesomeIcon className="ml-1 mr-1" icon={faContactBook}/></Link></button>
              </div>
            </li>
           
            
           
            <li className='text-right signin'>
              <Link to="/signin" className="text-white text-sm colorchanger ">
                Sign In <FontAwesomeIcon className="ml-1 mr-2" icon={faUser} />
              </Link>
            </li>
            <li>
              <Link to="/cart" className="text-white text-sm colorchanger ">
                <FontAwesomeIcon className="text-white text-sm colorchanger" icon={faCartShopping} />
              </Link>
            </li>
            <li>
              <Link to="/hiring" className="text-white text-sm colorchanger">
                <i>We're Hiring!</i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
