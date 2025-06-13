// src/components/LatestProductCard.jsx

import React from 'react';
import { FiShoppingCart, FiHeart, FiSearch } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

const LatestProductCard = ({ product, onToggleWishlist, isWishlisted }) => {
  const { image, name, price } = product;

  return (
    <div className="group">
      {/* 1. The container is now a flex column to stack image and icons on mobile */}
      <div className="relative bg-gray-100 p-4 flex flex-col items-center">
        <img src={image} alt={name} className="w-full h-52 object-contain" />

        {/* 2. This div now changes its position and layout based on screen size */}
        <div 
          className="flex justify-center space-x-4 mt-4 
                     md:absolute md:inset-0 md:mt-0
                     md:bg-transparent md:group-hover:bg-black/50
                     md:opacity-0 md:group-hover:opacity-100
                     transition-all duration-300"
        >
          <button className="bg-white p-2 rounded-full text-gray-700 hover:bg-pink-500 hover:text-white cursor-pointer">
            <FiShoppingCart />
          </button>
          
          <button 
            onClick={() => onToggleWishlist(product)}
            className="bg-white p-2 rounded-full text-gray-700 hover:bg-pink-500 hover:text-white cursor-pointer"
          >
            {isWishlisted ? (
              <FaHeart className="text-pink-500" />
            ) : (
              <FiHeart />
            )}
          </button>

          <button className="bg-white p-2 rounded-full text-gray-700 hover:bg-pink-500 hover:text-white cursor-pointer">
            <FiSearch />
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <h3 className="text-md font-semibold text-blue-900">{name}</h3>
        <p className="text-md text-gray-800">{price}</p>
      </div>
    </div>
  );
};

export default LatestProductCard;