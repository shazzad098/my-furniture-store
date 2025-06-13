import React from 'react';
import { FiPhoneCall, FiMapPin, FiShoppingBag } from 'react-icons/fi';
import contact from '../assets/ContactUs/contact.png'

const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-16">
      {/* Header */}
      <div className="container mx-auto px-6 text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec elit
          risus. Aliquam malesuada elit eros, malesuada ullamcorper erat vitae
          eget dolor lobortis. Accumsan fusce quisque quis bibendum quam.
        </p>
      </div>

      {/* Information About Us & Contact Way */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Information About Us */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Information About Us</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec elit
            risus. Aliquam malesuada elit eros, malesuada ullamcorper erat vitae
            eget dolor lobortis. Accumsan fusce quisque quis bibendum quam.
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-indigo-500 hover:text-indigo-700">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M8 3a5 5 0 00-5 5v.5A2.5 2.5 0 0014 18h2a2.5 2.5 0 002.453-7H16a5 5 0 00-4-5zm0-.5A5.5 5.5 0 0113.5 8H11V3z" />
              </svg>
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-700">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10C22 6.477 17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
              </svg>
            </a>
            <a href="#" className="text-cyan-500 hover:text-cyan-700">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10C22 6.477 17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Contact Way */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Way</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="text-purple-500 mr-2">
                <FiPhoneCall size={20} />
              </span>
              <div>
                <p className="font-bold">+1 (877) 236 09 99</p>
                <p>support@hekto.com</p>
              </div>
            </li>
            <li className="flex items-center">
              <span className="text-orange-500 mr-2">
                <FiMapPin size={20} />
              </span>
              <div>
                <p className="font-bold">20 Margaret St., London</p>
                <p>Greater London NW1 8JR, UK</p>
              </div>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">
                <FiShoppingBag size={20} />
              </span>
              <div>
                <p className="font-bold">Free standard shipping on all orders.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Get In Touch Form */}
      <div className="container mx-auto px-6 mt-12 flex flex-col md:flex-row gap-8">
        {/* Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your E-mail"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Type Your Message"
                rows={4}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-600 transition-colors"
            >
              Send Mail
            </button>
          </form>
        </div>

        {/* Illustration */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src= {contact}
            alt="Contact Us Illustration"
            className="max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;