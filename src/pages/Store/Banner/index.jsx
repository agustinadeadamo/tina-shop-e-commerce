import React from 'react';
import StoreImage from '../../../images/store-banner.jpg';

const Banner = () => {
  return (
    <div className="relative h-[50vh] flex flex-col justify-center items-center text-center text-white">
      {/* Background image */}
      <picture>
        <source srcSet={StoreImage} type="image/webp" />
        <img
          src={StoreImage}
          alt="Fashion Collection"
          className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
        />
      </picture>

      {/* Banner content */}
      <div className="relative z-10 p-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide">
          FALL WINTER 2024 COLLECTION
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-sm md:text-lg">
          Discover the latest trends in men&apos;s and women&apos;s fashion.
          From timeless classics to modern silhouettes, our collection offers
          something for everyone this season.
        </p>
      </div>
    </div>
  );
};

export default Banner;
