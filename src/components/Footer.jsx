import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      {/* Newsletter Section */}
      <div className="bg-gray-50 py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Get Latest Update By Subscribe <br /> Our Newsletter
          </h2>
          <form className="max-w-md mx-auto">
            <div className="flex items-center">
              <input 
                type="email" 
                placeholder="Enter Your Email" 
                className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-500" 
              />
              <button className="bg-pink-500 text-white font-bold px-6 rounded-r-md hover:bg-pink-600 transition-colors cursor-pointer">
                Shop Now
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#EEEFFB] py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Hekto</h1>
            <p className="text-gray-600">Contact Info</p>
            <p className="text-gray-600 mt-2">17 Princess Road, London, Greater London NW1 8JR, UK</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-pink-500">Laptops & Computers</a></li>
              <li><a href="#" className="hover:text-pink-500">Cameras & Photography</a></li>
              <li><a href="#" className="hover:text-pink-500">Smart Phones & Tablets</a></li>
              <li><a href="#" className="hover:text-pink-500">Video Games & Consoles</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Customer Care</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-pink-500">My Account</a></li>
              <li><a href="#" className="hover:text-pink-500">Discount</a></li>
              <li><a href="#" className="hover:text-pink-500">Returns</a></li>
              <li><a href="#" className="hover:text-pink-500">Orders History</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Pages</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-pink-500">Blog</a></li>
              <li><a href="#" className="hover:text-pink-500">Browse the Shop</a></li>
              <li><a href="#" className="hover:text-pink-500">Category</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-[#E7E4F8] py-4">
        <div className="container mx-auto px-6 flex justify-between items-center text-gray-600">
          <p>&copy;Hekto - All Rights Reserved</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-pink-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-pink-500"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;