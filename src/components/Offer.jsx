import React from 'react';
import { TbTruckDelivery, TbHeadset } from 'react-icons/tb';
import { LiaHandHoldingUsdSolid, LiaAwardSolid } from "react-icons/lia";

// Data for the offer cards
const offerData = [
  {
    icon: <TbTruckDelivery size={50} className="text-pink-500 mb-4" />,
    title: 'Free Delivery',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
  },
  {
    icon: <LiaHandHoldingUsdSolid size={50} className="text-pink-500 mb-4" />,
    title: '100% Cash Back',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
  },
  {
    icon: <LiaAwardSolid size={50} className="text-pink-500 mb-4" />,
    title: 'Quality Product',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
  },
  {
    icon: <TbHeadset size={50} className="text-pink-500 mb-4" />,
    title: '24/7 Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
  },
];


const Offer = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 underline">
          What Shopex Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerData.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center">
              {item.icon}
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;