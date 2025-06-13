import React, { useState } from 'react';
import img1 from '../assets/DiscountItem/img1.png';
import img2 from '../assets/DiscountItem/img2.png';
import img3 from '../assets/DiscountItem/img3.png';

// Data for each discount item
const discountItems = [
  {
    id: 1,
    title: '50% Discount Of All Products',
    description:
      'Emauris atar Blandit aeons loreme ipsum, magna in est adipiscing in phasellus non in justo.',
    image: img1,
  },
  {
    id: 2,
    title: '40% Off On Plastic Chairs',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    image: img2,
  },
  {
    id: 3,
    title: '60% Off On Sofa Sets',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.',
    image: img3,
  },
];

// Filter names that correspond to the above items
const discountFilters = ['Wood Chair', 'Plastic Chair', 'Sofa Collection'];

const DiscountItem = () => {
  const [activeFilter, setActiveFilter] = useState('Wood Chair');

  // Find the active item by index using the filters array
  const activeIndex = discountFilters.indexOf(activeFilter);
  const activeItem = discountItems[activeIndex];

  return (
    <section className="bg-[#F2F0FF] py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content Column */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Discount Item</h2>

          <ul className="flex flex-wrap space-x-6 mb-6">
            {discountFilters.map((filter) => (
              <li key={filter}>
                <button
                  onClick={() => setActiveFilter(filter)}
                  className={`text-lg hover:text-pink-500 pb-1 cursor-pointer ${
                    activeFilter === filter
                      ? 'text-pink-500 border-b-2 border-pink-500'
                      : 'text-gray-800'
                  }`}
                >
                  {filter}
                </button>
              </li>
            ))}
          </ul>

          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">{activeItem.title}</h3>
            <p className="text-gray-600 mb-8">{activeItem.description}</p>
            <button className="bg-pink-500 text-white font-bold py-3 px-8 rounded hover:bg-pink-600 transition-colors cursor-pointer">
              Shop Now
            </button>
          </div>
        </div>

        {/* Image Column */}
        <div className="flex justify-center">
          {/* Container with fixed height */}
          <div className="w-full max-w-md h-96 overflow-hidden rounded-lg bg-gray-100">
            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountItem;