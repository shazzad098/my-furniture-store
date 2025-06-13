import React from 'react';
import img1 from '../assets/TopCategories/img1.png';
import img2 from '../assets/TopCategories/img2.png';
import img3 from '../assets/TopCategories/img3.png';
import img4 from '../assets/TopCategories/img4.png';
// Sample data for the top categories
const categories = [
  { id: 1, name: 'Mini LCW Chair', price: '$56.00', image: img1 },
  { id: 2, name: 'Mini DSW Chair', price: '$62.00', image: img2 },
  { id: 3, name: 'Mini DSR Chair', price: '$48.00', image: img3 },
  { id: 4, name: 'Mini DAW Chair', price: '$75.00', image: img4 },
];

const TopCategories = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Top Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group text-center">
              {/* Circular Image with Hover Effect */}
              <div className="relative w-64 h-64 mx-auto bg-gray-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-pink-100">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-3/5 h-3/5 object-contain" 
                />
                <div className="absolute inset-0 bg-pink-500 bg-opacity-70 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-pink-500 font-bold py-2 px-4 rounded hover:bg-gray- cursor-pointer">
                    View Shop
                  </button>
                </div>
              </div>
              {/* Category Info */}
              <div className="mt-4">
                <h3 className="text-lg font-bold text-gray-800">{category.name}</h3>
                <p className="text-md text-gray-600">{category.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;