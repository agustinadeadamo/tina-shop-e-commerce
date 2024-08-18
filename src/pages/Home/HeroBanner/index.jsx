import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { imageVariants, textVariants } from './animationsVariants';
import HeroImage from '../../../images/hero-banner-bg.jpg';

const HeroBanner = () => {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate('/store');
  };

  return (
    <div className="relative overflow-hidden h-[85vh]">
      {/* Image with zoom out effect */}
      <motion.img
        src={HeroImage}
        alt="A stylish hero banner for the Pre-Fall 2024 collection"
        initial={imageVariants.initial}
        animate={imageVariants.animate}
        transition={imageVariants.transition}
        className="w-full h-full object-cover"
      />

      {/* Container for the text and button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-white">
        <motion.h1
          initial={textVariants.initial}
          animate={textVariants.animate}
          transition={textVariants.transition(1)}
          className="text-5xl font-semibold uppercase"
        >
          Pre-Fall 2024
        </motion.h1>
        <motion.button
          initial={textVariants.initial}
          animate={textVariants.animate}
          transition={textVariants.transition(1.8)}
          onClick={onClickButton}
          className="mt-4 px-6 py-2 bg-white text-black text-sm font-montserrat uppercase"
        >
          Explore the women&apos;s collection
        </motion.button>
      </div>
    </div>
  );
};

export default HeroBanner;
