import React, { useState } from 'react';
import phrases from './phrasesData';
import RotatingText from '../../components/RotatingText';
import RedirecToShop from './RedirecToShop';

const AboutUs = () => {
  const [showButton, setShowButton] = useState(false);

  return (
    <div className="h-screen w-screen flex flex-col items-center pt-[30vh] px-[100px] z-50">
      <p className="font-montserrat uppercase text-6xl">We are</p>
      <RotatingText phrases={phrases} onComplete={() => setShowButton(true)} />
      {showButton && <RedirecToShop />}
    </div>
  );
};

export default AboutUs;
