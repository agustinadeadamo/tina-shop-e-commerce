import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../../images/fashion-section-woman.jpg';

const imageVariants = {
  hidden: { scale: 1.3 },
  visible: { scale: 1 },
};

const FashionImage = () => (
  <motion.div
    className="lg:w-1/2 mt-8 lg:mt-0"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={imageVariants}
    transition={{ duration: 1, ease: 'easeOut' }}
  >
    <div className="relative w-full h-[95vh] overflow-hidden">
      <motion.img
        src={Image}
        alt="hero-banner"
        className="w-full h-full object-cover"
      />
    </div>
  </motion.div>
);

export default FashionImage;
