import React from 'react';
import HeroBanner from './HeroBanner';
import MainCategories from './MainCategories';
import TrendingProducts from './TrendingProducts';
import FashionSection from './FashionSection';
import FollowUs from './FollowUs';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <MainCategories />
      <TrendingProducts />
      <FashionSection />
      <FollowUs />
    </>
  );
};

export default Home;
