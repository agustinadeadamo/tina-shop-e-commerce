import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryButton } from '../../Buttons';

const CartFooter = ({ subtotal, loading }) => {
  if (!subtotal) return null;

  return (
    <div
      data-testid="cart-footer"
      className="absolute bottom-0 left-0 right-0 border-t border-tertiary-light p-6 bg-white py-8"
    >
      <div className="text-xs flex justify-between mb-2">
        <span className="text-gray-600">Subtotal</span>
        <span data-testid="subtotal-amount">${subtotal.toFixed(2)}</span>
      </div>
      <div className="text-xs flex justify-between mb-2">
        <span className="text-gray-600">Delivery costs</span>
        <span data-testid="delivery-cost" className="text-secondary font-bold">
          FREE
        </span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="font-bold text-sm">Total (VAT included)</span>
        <span data-testid="total-amount" className="font-bold text-sm">
          ${subtotal.toFixed(2)}
        </span>
      </div>
      <PrimaryButton dataTestid="checkout-button" disabled={loading}>
        Proceed to checkout
      </PrimaryButton>
    </div>
  );
};

CartFooter.propTypes = {
  subtotal: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default React.memo(CartFooter);
