import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { SecondaryButton } from '../../Buttons';

const AddToCartButton = ({ handleAddToCart }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
    >
      <SecondaryButton onClick={handleAddToCart} type="button">
        Add to cart
      </SecondaryButton>
    </motion.div>
  );
};

AddToCartButton.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
};

export default React.memo(AddToCartButton);
