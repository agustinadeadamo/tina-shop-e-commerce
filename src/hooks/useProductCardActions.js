import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateCart } from '../actions/cart';
import errorMesajes from '../constants/errorMesajes';
import { useError } from '../contexts/GeneralErrorContext';

/**
 * Custom hook that provides actions for product cards, including adding a single item to the cart and navigating to the product detail page.
 * Manages loading state during asynchronous operations and handles errors using the GeneralErrorContext.
 * @returns {Object} - Returns an object with functions to add an item to the cart, view more product details, and the loading state.
 */
const useProductCardActions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { showError } = useError();

  const handleAddSingleItemToCart = async product => {
    setLoading(true);
    try {
      const newItem = {
        ...product,
        quantity: 1,
      };
      await dispatch(updateCart(newItem)).unwrap();
    } catch (error) {
      showError(errorMesajes.ADD_ITEM_CART);
    } finally {
      setLoading(false);
    }
  };

  const handleViewMore = id => {
    navigate(`/product/${id}`);
  };

  return {
    handleAddSingleItemToCart,
    handleViewMore,
    loading,
  };
};

export default useProductCardActions;
