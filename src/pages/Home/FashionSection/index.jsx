import React from 'react';
import FashionTextContent from './FashionTextContent';
import FashionImage from './FashionImage';

const FashionSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white py-10 px-4 lg:px-20">
      <FashionTextContent />
      <FashionImage />
    </div>
  );
};

export default FashionSection;
