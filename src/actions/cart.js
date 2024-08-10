import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { fetchCartItemsFromDB, syncCartWithDB } from '../api/cartService';
import {
  calculateTotalQuantity,
  modifyCartItems,
  removeItemFromCartItems,
} from '../utils/cart';
import { auth } from '../../firebase-config';

export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async () => {
    const items = await fetchCartItemsFromDB();
    return {
      items,
      totalQuantity: calculateTotalQuantity(items),
    };
  }
);

const syncCart = async (updatedItems) => {
  if (auth.currentUser) {
    await syncCartWithDB(updatedItems);
  }
  return {
    items: updatedItems,
    totalQuantity: calculateTotalQuantity(updatedItems),
  };
};

export const updateCart = createAsyncThunk(
  'cart/updateCart',
  async (newItem, { getState }) => {
    const { cart } = getState();
    const updatedItems = modifyCartItems(cart.items, newItem, newItem.quantity);
    return syncCart(updatedItems);
  }
);

export const removeItemFromCart = createAsyncThunk(
  'cart/removeItemFromCart',
  async (itemToRemove, { getState }) => {
    const { cart } = getState();
    const updatedItems = removeItemFromCartItems(cart.items, itemToRemove.id);

    return syncCart(updatedItems);
  }
);

export const clearCart = createAction('cart/clearCart');
