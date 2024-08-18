import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { updateCart, removeItemFromCart } from '../../actions/cart';
import errorMesajes from '../../constants/errorMesajes';
import { useDisabledScroll } from '../../hooks';
import CartItem from './CartItem';
import CartHeader from './CartHeader';
import CartBanner from './CartBanner';
import CartFooter from './CartFooter';
import './style.scss';

const CartSidebar = ({ isOpen, toggleCart }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useDisabledScroll(isOpen);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const onBeforeUpdatingCart = () => {
    setLoading(true);
    setError(null);
  };

  const handleRemoveItem = useCallback(
    async (item) => {
      onBeforeUpdatingCart();
      try {
        await dispatch(removeItemFromCart(item)).unwrap();
      } catch {
        setError(errorMesajes.REMOVE_ITEM);
      } finally {
        setLoading(false);
      }
    },
    [dispatch]
  );

  const handleQuantityChange = useCallback(
    async (item, quantityChange) => {
      onBeforeUpdatingCart();
      try {
        const newQuantity = item.quantity + quantityChange;
        const isItemStillInCart = newQuantity > 0;
        if (isItemStillInCart) {
          await dispatch(
            updateCart({ ...item, quantity: quantityChange })
          ).unwrap();
        } else {
          await handleRemoveItem(item);
        }
      } catch {
        setError(errorMesajes.UPDATE_CART);
      } finally {
        setLoading(false);
      }
    },
    [dispatch, handleRemoveItem]
  );

  const isCartEmpty = items.length === 0;

  return (
    <div>
      <CartHeader totalItems={totalItems} toggleCart={toggleCart} />
      <CartBanner />
      <div className="flex flex-col h-full overflow-hidden">
        <div className="custom-scrollbar max-h-[calc(100vh-220px)] overflow-y-auto">
          {error && <p className="text-center text-primary mt-4">{error}</p>}
          {isCartEmpty ? (
            <p className="text-center mt-4 text-gray-600">Your cart is empty</p>
          ) : (
            items.map((item) => (
              <CartItem
                disabledButtons={loading}
                handleDecreaseQuantity={() => handleQuantityChange(item, -1)}
                handleRemoveItem={() => handleRemoveItem(item)}
                handleIncreaseQuantity={() => handleQuantityChange(item, 1)}
                key={item.id}
                item={item}
              />
            ))
          )}
        </div>
      </div>

      <CartFooter subtotal={subtotal} loading={loading} />
    </div>
  );
};

CartSidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleCart: PropTypes.func.isRequired,
};

export default CartSidebar;
