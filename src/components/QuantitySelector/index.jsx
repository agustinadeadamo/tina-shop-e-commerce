import React from 'react';
import PropTypes from 'prop-types';

const QuantitySelector = ({
  quantity,
  increaseQuantity,
  decreaseQuantity,
  disabled = false,
}) => {
  const buttonClass = `flex items-center justify-center w-6 h-6 border-2 border-black text-black focus:outline-none rounded-full transition-colors ${
    disabled ? 'bg-gray-200 cursor-not-allowed' : 'hover:bg-gray-100'
  }`;
  const buttonSpanClass = 'text-xl leading-none mb-[2px]';

  return (
    <div className="flex items-center">
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={decreaseQuantity}
        className={buttonClass}
        disabled={disabled}
        data-testid="decrease-button"
      >
        <span className={buttonSpanClass}>-</span>
      </button>
      <input
        type="text"
        value={quantity}
        readOnly
        className="w-6 h-6 text-center bg-white focus:outline-none mx-1 text-xs"
        aria-label={`Quantity: ${quantity}`}
        data-testid="quantity-input"
      />
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={increaseQuantity}
        className={buttonClass}
        disabled={disabled}
        data-testid="increase-button"
      >
        <span className={buttonSpanClass}>+</span>
      </button>
    </div>
  );
};

QuantitySelector.propTypes = {
  quantity: PropTypes.number.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default QuantitySelector;
