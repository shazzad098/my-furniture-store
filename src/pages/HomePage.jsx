// src/pages/HomePage.jsx
import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import LatestProducts from '../components/LatestProducts';
import Offer from '../components/Offer';
import UniqueFeatures from '../components/UniqueFeatures';
import TrendingProductCard from '../components/TrendingProductCard';
import DiscountItem from '../components/DiscountItem';
import TopCategories from '../components/TopCategories';

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <LatestProducts />
      <Offer />
      <UniqueFeatures />
      <TrendingProductCard />
      <DiscountItem />
      <TopCategories />
    </>
  );
};

export default HomePage;