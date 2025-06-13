import React from 'react';
import { FiTruck, FiPercent, FiAward, FiClock } from 'react-icons/fi';

const FeaturesSection = () => {
  const features = [
    {
      icon: <FiTruck size={40} />,
      title: 'Free Delivery',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <FiPercent size={40} />,
      title: '100% Cash Back',
      description: 'Magna in est adipiscing in phasellus non in justo.',
    },
    {
      icon: <FiAward size={40} />,
      title: 'Quality Product',
      description: 'Accumsan fusce quisque quis bibendum quam.',
    },
    {
      icon: <FiClock size={40} />,
      title: '24/7 Support',
      description: 'Emauris atar blandit aeons loreme ipsum.',
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-pink-500 text-white p-4 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;