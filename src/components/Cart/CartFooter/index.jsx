import React from "react";
import PropTypes from "prop-types";
import { PrimaryButton } from "../../Buttons";

function CartFooter({ subtotal, loading }) {
  if (!subtotal) return null;

  return (
    <div className="absolute bottom-0 left-0 right-0 border-t border-tertiary-light p-6 bg-white py-8">
      <div className="text-xs flex justify-between mb-2">
        <span className="text-gray-600">Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="text-xs flex justify-between mb-2">
        <span className="text-gray-600">Delivery costs</span>
        <span className="text-secondary font-bold">FREE</span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="font-bold text-sm">Total (VAT included)</span>
        <span className="font-bold text-sm">${subtotal.toFixed(2)}</span>
      </div>
      <PrimaryButton disabled={loading}>Proceed to checkout</PrimaryButton>
    </div>
  );
}

CartFooter.propTypes = {
  subtotal: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default React.memo(CartFooter);
