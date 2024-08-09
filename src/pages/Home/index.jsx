import React from "react";
import HeroBanner from "./HeroBanner";
import InfoCards from "./InfoCard";
import DiscountProducts from "./DiscountProducts";
import ReviewSection from "./Reviews";
import MidPageBanner from "./MidPageBanner";
import TrendingProducts from "./TrendingProducts";

function Home() {
  return (
    <>
      <HeroBanner />
      <DiscountProducts />
      <div className="relative">
        <TrendingProducts />
        <div className="relative lg:absolute lg:bottom-[-60px] left-1/2 transform -translate-x-1/2 z-50">
          <InfoCards />
        </div>
      </div>
      <MidPageBanner />
      <ReviewSection />
    </>
  );
}

export default Home;
