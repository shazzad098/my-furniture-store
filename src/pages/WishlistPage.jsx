// src/pages/WishlistPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import LatestProductCard from '../components/LatestProductCard'; // We will reuse the same card component

// This component receives the 'wishlist' array and the 'onToggleWishlist' function as props from App.jsx
const WishlistPage = ({ wishlist, onToggleWishlist }) => {
  return (
    <div className="container mx-auto px-6 py-12 min-h-[50vh]">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">My Wishlist</h1>

      {/* 
        Conditional Rendering:
        - If the wishlist has 0 items, show a message and a link to the shop.
        - Otherwise, show the grid of wishlisted products.
      */}
      {wishlist.length === 0 ? (
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Your wishlist is currently empty.</p>
          <p className="text-gray-500 mb-8">Click the heart icon on any product to add it to your list.</p>
          <Link 
            to="/shop" 
            className="bg-pink-500 text-white font-bold py-3 px-8 rounded hover:bg-pink-600 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Map over the wishlist array and render a card for each product */}
          {wishlist.map((product) => (
            <LatestProductCard
              key={product.id}
              product={product}
              onToggleWishlist={onToggleWishlist}
              // Every item on this page is, by definition, wishlisted.
              // So we pass `true` to ensure the heart icon is filled.
              isWishlisted={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;