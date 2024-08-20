import React from 'react';
import { motion } from 'framer-motion';
import RotatingText from '../RotatingText';

const phrases = [
  'the best deals for you...',
  'your next great purchase...',
  'exclusive surprises just for you...',
  "amazing products you'll love...",
  'your perfect shopping experience...',
  'the best picks just for you...',
  "trends you'll absolutely love...",
  'something special, just for you...',
  'your cart with incredible deals...',
  'a unique shopping experience...',
];
const FullScreenLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-white flex items-center justify-center z-50"
      exit={{ y: '-100%' }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div className="text-black text-3xl text-center text-montserrat">
        <p className="font-montserrat uppercase text-4xl mb-2">Loading</p>
        <RotatingText fontSize="5xl" phrases={phrases} />
      </div>
    </motion.div>
  );
};

export default FullScreenLoader;
