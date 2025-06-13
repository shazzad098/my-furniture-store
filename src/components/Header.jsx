// src/components/Header.jsx

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";

const Header = () => {
  // State for desktop and mobile menus
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  // State for the login modal
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Function to close all menus
  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsDesktopDropdownOpen(false);
    setIsMobileDropdownOpen(false);
  };

  return (
    <>
      <header>
        {/* Top Bar */}
        <div className="bg-[#7E33E0] py-2">
          <div className="container mx-auto px-6 flex justify-between text-white text-sm md:text-base">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <span>Email: example@example.com</span>
              <span className="hidden sm:inline-block lg:ml-4">Phone: (123) 456-7890</span>
            </div>
            <div>
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="hover:underline ml-4 cursor-pointer"
              >
                Login
              </button>
              {/* --- FIX #1: Corrected the desktop wishlist link --- */}
              <Link to="/wishlist" className="hover:underline ml-4">
                Wishlist
              </Link>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="bg-white py-4 shadow-md">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <Link to="/" onClick={closeAllMenus}>
              <h1 className="text-3xl font-bold text-gray-800 cursor-pointer">
                Hekto
              </h1>
            </Link>

            <nav className="hidden md:flex flex-grow justify-center">
              <ul className="flex space-x-8 items-center">
                <li className="relative">
                  <button
                    onClick={() => setIsDesktopDropdownOpen(!isDesktopDropdownOpen)}
                    className="flex items-center text-pink-500 hover:text-pink-600 cursor-pointer"
                  >
                    Home <IoIosArrowDown className={`ml-1 transition-transform duration-300 ${isDesktopDropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isDesktopDropdownOpen && (
                    <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2 z-10">
                      <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500 rounded-md">Homepage 1</a></li>
                      <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500 rounded-md">Homepage 2</a></li>
                      <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500 rounded-md">Homepage 3</a></li>
                    </ul>
                  )}
                </li>
                {/* Corrected placeholder links to prevent page reloads */}
                
                <li><Link to="/shop" className="text-gray-800 hover:text-pink-500">Products</Link></li>
                
                <li><Link to="/about-us" className="text-gray-800 hover:text-pink-500">About Us</Link></li>
                <li><Link to="/contact-us" className="text-gray-800 hover:text-pink-500">Contact Us</Link></li>
              </ul>
            </nav>

            <div className="hidden md:flex items-center">
              <input type="text" className="border border-gray-300 rounded-l-md px-3 py-1 focus:outline-none focus:ring-1 focus:ring-pink-500" />
              <button className="bg-pink-500 text-white p-2 rounded-r-md hover:bg-pink-600">
                <FiSearch size={20} />
              </button>
            </div>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-800 focus:outline-none"
            >
              {isMobileMenuOpen ? <IoIosClose size={30} /> : <IoIosMenu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation (Slide-in) */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-20 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b">
             <h2 className="text-xl font-bold text-gray-800">Menu</h2>
             <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800">
                <IoIosClose size={30} />
             </button>
          </div>
          <nav className="p-4">
            <ul className="space-y-4">
              <li className="border-b pb-4 mb-4">
                <button
                  onClick={() => { setIsLoginModalOpen(true); closeAllMenus(); }}
                  className="w-full text-left text-gray-800 hover:text-pink-500"
                >
                  Login
                </button>
                {/* --- FIX #2: Corrected the mobile wishlist link --- */}
                <Link to="/wishlist" onClick={closeAllMenus} className="block mt-2 text-gray-800 hover:text-pink-500">
                  Wishlist
                </Link>
              </li>

              <li>
                <button
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  className="flex items-center justify-between w-full text-left text-pink-500 hover:text-pink-600"
                >
                  Home <IoIosArrowDown className={`transition-transform duration-300 ${isMobileDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {isMobileDropdownOpen && (
                  <ul className="mt-2 pl-4 space-y-2">
                    <li><a href="#" onClick={closeAllMenus} className="block text-gray-700 hover:text-pink-500">Homepage 1</a></li>
                    <li><a href="#" onClick={closeAllMenus} className="block text-gray-700 hover:text-pink-500">Homepage 2</a></li>
                    <li><a href="#" onClick={closeAllMenus} className="block text-gray-700 hover:text-pink-500">Homepage 3</a></li>
                  </ul>
                )}
              </li>
              {/* Corrected all links to use <Link> component */}
              
              <li><Link to="/shop" onClick={closeAllMenus} className="text-gray-800 hover:text-pink-500">Products</Link></li>
            
              <li><Link to="/about-us" onClick={closeAllMenus} className="text-gray-800 hover:text-pink-500">About Us</Link></li>
              <li><Link to="/contact-us" onClick={closeAllMenus} className="text-gray-800 hover:text-pink-500">Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
};

export default Header;