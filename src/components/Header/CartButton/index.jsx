import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import CartSidebar from "../../Cart";

function CartButton() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleCart}
        className="relative text-gray-700 mr-4"
        aria-label="Toggle cart"
      >
        <FaShoppingCart className="h-5 w-5" />
        {totalQuantity > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-secondary rounded-full transform translate-x-1/2 -translate-y-1/2">
            {totalQuantity}
          </span>
        )}
      </button>
      <CartSidebar isOpen={isCartOpen} toggleCart={toggleCart} />
    </>
  );
}

export default CartButton;
