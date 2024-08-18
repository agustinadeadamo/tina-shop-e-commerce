import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CiShoppingCart } from 'react-icons/ci';
import { AnimatePresence } from 'framer-motion';
import Cart from '../../Cart';
import Overlay from '../../Cart/Overlay';

const CartButton = () => {
  const totalQuantity = useSelector(({ cart }) => cart.totalQuantity);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleCart();
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleCart}
        className="relative flex items-center text-gray-700 text-sm"
        aria-label="Toggle cart"
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <CiShoppingCart className="text-2xl" />
        <p className="hidden md:block">Cart({totalQuantity})</p>
      </button>

      <AnimatePresence>
        {isCartOpen && (
          <>
            <Cart toggleCart={toggleCart} />
            <Overlay toggleCart={toggleCart} handleKeyDown={handleKeyDown} />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartButton;
