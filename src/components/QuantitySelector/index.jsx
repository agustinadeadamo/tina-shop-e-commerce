import React from 'react';
import PropTypes from 'prop-types';

const QuantitySelector = ({
  quantity,
  increaseQuantity,
  decreaseQuantity,
  disabled = false,
}) => {
  const buttonClass = `flex items-center justify-center w-7 h-7 border-2 border-primary text-primary focus:outline-none rounded-full transition-colors ${
    disabled
      ? 'bg-secondary-light cursor-not-allowed'
      : 'hover:bg-secondary-light'
  }`;
  const buttonSpanClass = 'text-2xl leading-none mb-[3px]';

  return (
    <div className="flex items-center" data-testid="quantity-selector">
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
        className="w-7 h-7 text-center bg-white focus:outline-none mx-1 text-xs"
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
