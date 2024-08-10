import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

const CartHeader = ({ totalItems, toggleCart }) => {
  return (
    <div className="bg-white px-4 py-4 flex justify-between items-center relative">
      <span className="text-xl font-semibold text-black mb-2">
        Basket ({totalItems})
      </span>
      <button
        type="button"
        aria-label="close-cart"
        onClick={toggleCart}
        className="text-gray-600"
      >
        <FaTimes />
      </button>
    </div>
  );
};

CartHeader.propTypes = {
  totalItems: PropTypes.number.isRequired,
  toggleCart: PropTypes.func.isRequired,
};

export default React.memo(CartHeader);
