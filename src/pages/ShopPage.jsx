// src/pages/ShopPage.jsx

import React from 'react';
import { allProducts } from '../data/Products';
import LatestProductCard from '../components/LatestProductCard';

// 1. Accept the props from App.jsx that you set up earlier
const ShopPage = ({ wishlist, onToggleWishlist }) => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Our Products
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {allProducts.map(product => (
          // 2. Pass the entire 'product' object and the wishlist props
          <LatestProductCard 
            key={product.id} 
            product={product} // Pass the whole product object
            onToggleWishlist={onToggleWishlist}
            isWishlisted={wishlist.some(item => item.id === product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;