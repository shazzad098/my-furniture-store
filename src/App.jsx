// src/App.jsx

// 1. Import useState to manage state
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Your existing component imports
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import LatestProducts from './components/LatestProducts';
import Offer from './components/Offer';
import UniqueFeatures from './components/UniqueFeatures';
import TrendingProductCard from './components/TrendingProductCard';
import DiscountItem from './components/DiscountItem';
import TopCategories from './components/TopCategories';
import Footer from './components/Footer';

// Your existing page imports
import ContactUs from './pages/ContactUs';
import ShopPage from './pages/ShopPage';
import NotFound from './pages/NotFound';
import AboutUs from './pages/AboutUs';

// 2. Import the WishlistPage you created
import WishlistPage from './pages/WishlistPage';

// This Home component is fine, no changes needed here.
const Home = () => (
  <div className="App">
    <Hero />
    <FeaturedProducts />
    <LatestProducts />
    <Offer />
    <UniqueFeatures />
    <TrendingProductCard />
    <DiscountItem />
    <TopCategories />
  </div>
);

function App() {
  // 3. Define the state for the wishlist here
  const [wishlist, setWishlist] = useState([]);

  // 4. Define the function to add/remove items from the wishlist
  const handleToggleWishlist = (product) => {
    const isWishlisted = wishlist.some((item) => item.id === product.id);
    if (isWishlisted) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <Router>
      {/* 5. Remember to update the Header to link to /wishlist */}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* 6. Pass the state and the handler function as props to ShopPage */}
          <Route
            path="/shop"
            element={<ShopPage wishlist={wishlist} onToggleWishlist={handleToggleWishlist} />}
          />

          {/* 7. Add the new route for the Wishlist page, also passing the props */}
          <Route
            path="/wishlist"
            element={<WishlistPage wishlist={wishlist} onToggleWishlist={handleToggleWishlist} />}
          />

          {/* Your other routes */}
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;