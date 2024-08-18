import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const FullScreenLoader = ({ onLoaded }) => {
  const [count, setCount] = useState(23000); // Starting number
  const target = 23100; // Target number of happy customers

  useEffect(() => {
    if (count < target) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 10); // Speed of counting up

      return () => clearInterval(interval);
    }
    // Notifies when counting is done
    onLoaded();
  }, [count, target, onLoaded]);

  return (
    <motion.div
      className="fixed inset-0 bg-white flex items-center justify-center z-50"
      exit={{ y: '-100%' }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div className="text-black text-3xl text-center text-montserrat">
        <p> Unpacking {count}</p>
        <p className="font-archivo">fresh looks.</p>
      </div>
    </motion.div>
  );
};

FullScreenLoader.propTypes = {
  onLoaded: PropTypes.func.isRequired,
};

export default FullScreenLoader;
