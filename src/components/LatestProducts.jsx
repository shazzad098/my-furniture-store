import React, { useState } from "react";
import { FiHeart, FiEye, FiShoppingCart } from "react-icons/fi";
import img1 from "../assets/LatestProduct/img1.png";
import img2 from "../assets/LatestProduct/img2.png";
import img3 from "../assets/LatestProduct/img3.png";
import img4 from "../assets/LatestProduct/img4.png";
import img5 from "../assets/LatestProduct/img5.png";
import img6 from "../assets/LatestProduct/img6.png";
import img7 from "../assets/LatestProduct/img7.png";
import img8 from "../assets/LatestProduct/img8.png";
import img9 from "../assets/LatestProduct/img9.png";


// All product data categorized by filter
const allProductsData = {
  "New Arrival": [
    { id: 1, name: "New Chair", price: "$45.00", image: img1 },
    { id: 2, name: "Modern Sofa", price: "$320.00", image: img2 },
    { id: 3, name: "Wooden Table", price: "$120.00", image: img3 },
    { id: 4, name: "Comfort Chair", price: "$42.00", image: img4 },
    { id: 5, name: "Leather Sofa", price: "$450.00", image: img5 },
    { id: 6, name: "Coffee Table", price: "$85.00", image: img6 },
  ],
  "Best Seller": [
    { id: 4, name: "Comfort Chair", price: "$42.00", image: img4 },
    { id: 5, name: "Leather Sofa", price: "$450.00", image: img1 },
    { id: 6, name: "Coffee Table", price: "$85.00", image: img2 },
    { id: 7, name: "Luxury Chair", price: "$75.00", image: img7 },
    { id: 8, name: "Sectional Sofa", price: "$680.00", image: img9 },
    { id: 9, name: "Dining Table", price: "$220.00", image: img8 },
  ],
  "Featured": [
    { id: 7, name: "Luxury Chair", price: "$75.00", image: img3 },
    { id: 8, name: "Sectional Sofa", price: "$680.00", image: img4 },
    { id: 9, name: "Dining Table", price: "$220.00", image: img1 },
    { id: 10, name: "Discount Chair", price: "$35.00", image: img2 },
    { id: 11, name: "Recliner Sofa", price: "$380.00", image: img9 },
    { id: 12, name: "Side Table", price: "$45.00", image: img5 },
  ],
  "Special Offer": [
    { id: 10, name: "Discount Chair", price: "$35.00", image: img2 },
    { id: 11, name: "Recliner Sofa", price: "$380.00", image: img3 },
    { id: 12, name: "Side Table", price: "$45.00", image: img4 },
    { id: 13, name: "Stylish Chair", price: "$42.00", image: img7 },
    { id: 14, name: "Leather Sofa", price: "$450.00", image: img8 },
    { id: 15, name: "Coffee Table", price: "$85.00", image: img9 },
  ]
};

const LatestProductCard = ({ name, price, image }) => {
  return (
    <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="icon-btn">
            <FiHeart className="w-5 h-5" />
          </button>
          <button className="icon-btn">
            <FiEye className="w-5 h-5" />
          </button>
          <button className="icon-btn">
            <FiShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold text-gray-700">{name}</h3>
        <p className="text-pink-500 font-medium">{price}</p>
      </div>
    </div>
  );
};

const LatestProducts = () => {
  const [activeFilter, setActiveFilter] = useState("New Arrival");
  const filterLinks = ["New Arrival", "Best Seller", "Featured", "Special Offer"];

  // Get products for the active filter
  const filteredProducts = allProductsData[activeFilter] || [];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 underline">
          Latest Products
        </h2>

        <ul className="flex justify-center space-x-8 mb-12">
          {filterLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => setActiveFilter(link)}
                className={`text-lg hover:text-pink-500 cursor-pointer ${
                  activeFilter === link
                    ? "text-pink-500 underline"
                    : "text-gray-800"
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <LatestProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;