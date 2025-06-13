import React, { useState, useEffect } from "react";
import promoImg1 from "../assets/HeroImages/promoImg-1.png";
import img1 from "../assets/HeroImages/img1.png";
import img2 from "../assets/HeroImages/img2.png";
import img3 from "../assets/HeroImages/img3.png";

// Data for each slide of the carousel
const slides = [
  {
    id: 1,
    preTitle: "Best Furniture For Your Castle...",
    title: "New Furniture Collection Trends in 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    mainImage: img1,
    promoImage: promoImg1,
    promoText: "50% off",
  },
  {
    id: 2,
    preTitle: "Top Quality Seating...",
    title: "Discover Our Modern Sofa Collection",
    description:
      "Consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo. Lorem ipsum dolor sit amet.",
    mainImage: img2,
    promoImage: promoImg1,
    promoText: "New!",
  },
  {
    id: 3,
    preTitle: "Elegant Dining Solutions...",
    title: "Stylish Dining Sets for Every Home",
    description:
      "Magna in est adipiscing in phasellus non in justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mainImage: img3,
    promoImage: promoImg1,
    promoText: "Sale",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#F2F0FF] relative overflow-hidden">
      {/* Slides container */}
      <div className="relative h-[550px] md:h-[600px] lg:h-[700px] w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Slide Content */}
            <div className="container mx-auto h-full flex flex-col md:flex-row items-center justify-between px-6">
              {/* Decorative Image (Left) */}
              <div className="absolute left-6 top-20 md:left-20 md:top-0 hidden md:block">
                <img
                  src={slide.promoImage}
                  alt="Decorative element"
                  className="h-48 md:h-64"
                />
              </div>

              {/* Text and Button */}
              <div className="max-w-lg z-10 text-center md:text-left mt-10 md:mt-0 md:ml-6">
                <p className="font-bold text-pink-500">{slide.preTitle}</p>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800 my-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-gray-600 mb-6 md:mb-8">{slide.description}</p>
                <button className="bg-pink-500 text-white font-bold py-3 px-6 md:px-8 rounded hover:bg-pink-600 transition-colors cursor-pointer">
                  Shop Now
                </button>
              </div>

              {/* Main Image (Right) */}
              <div className="relative w-full md:w-1/2 h-64 md:h-[500px] mt-8 md:mt-0">
                <div className="w-full h-full bg-pink-100 rounded-full md:hidden"></div>
                <img
                  src={slide.mainImage}
                  alt="Main product"
                  className="absolute inset-0 w-full h-full object-contain"
                />
                <div className="absolute top-4 right-4 md:top-10 md:right-0 bg-blue-500 text-white w-20 md:w-24 h-20 md:h-24 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold transform -rotate-12">
                  {slide.promoText}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 md:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-pink-500 scale-125" : "bg-pink-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;