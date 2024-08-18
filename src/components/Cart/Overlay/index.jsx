import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import overlayVariants from './animationVariants';

const Overlay = ({ toggleCart, handleKeyDown }) => (
  <motion.div
    className="fixed inset-0 bg-black bg-opacity-50 z-20"
    onClick={toggleCart}
    variants={overlayVariants}
    initial="closed"
    animate="open"
    exit="closed"
    onKeyDown={handleKeyDown}
    tabIndex={0}
    role="button"
  />
);

Overlay.propTypes = {
  toggleCart: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
};

export default Overlay;
