import React from 'react';
import img1 from '../assets/UniqueFeatures/img1.png';

// Data for the feature list items
const features = [
  { text: 'All frames constructed with hardwood solids and laminates', color: 'bg-pink-500' },
  { text: 'Reinforced with double wood dowels, glue, screw-nails and corner blocks', color: 'bg-blue-900' },
  { text: 'Includes a stress-tested steel frame, offering durable support', color: 'bg-green-500' },
];


const UniqueFeatures = () => {
  return (
    <section className="bg-[#F2F0FF] py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Column */}
        <div className="flex justify-center">
          {/* Note: Replace with your actual image */}
          <img src= {img1} alt="Blue Sofa" className="rounded-lg w-96" />
        </div>

        {/* Text Content Column */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Unique Features Of Latest & Trending Products
          </h2>
          
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className={`w-3 h-3 rounded-full ${feature.color} mr-3`}></span>
                <p className="text-gray-600">{feature.text}</p>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            <button className="bg-pink-500 text-white font-bold py-2 px-6 rounded hover:bg-pink-600 transition- cursor-pointer">
              Add To Cart
            </button>
            <div className="text-gray-800 font-semibold">
              <p>B&B Italian Sofa</p>
              <p>$32.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueFeatures;