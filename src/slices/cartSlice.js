import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCartItems,
  updateCart,
  removeItemFromCart,
} from "../actions/cart";

/**
 * Loads the initial state of the cart from localStorage.
 * If there are saved cart items, it returns them as an array; otherwise, returns an empty array.
 *
 * @returns {Array} - The array of cart items retrieved from localStorage, or an empty array if none are found.
 */
const loadInitialCartState = () => {
  const savedCart = localStorage.getItem("cartItems");
  return savedCart ? JSON.parse(savedCart) : [];
};

const initialState = {
  items: loadInitialCartState(),
  totalQuantity: loadInitialCartState().reduce(
    (acc, item) => acc + item.quantity,
    0,
  ),
};

/**
 * Updates the cart state and synchronizes it with localStorage.
 * Takes the new cart state from the action payload and saves it to both the Redux state and localStorage.
 *
 * @param {Object} state - The current state of the cart.
 * @param {Object} action - The action object containing the payload with the updated cart items and total quantity.
 */
const updateStateAndLocalStorage = (state, action) => {
  state.items = action.payload.items;
  state.totalQuantity = action.payload.totalQuantity;
  localStorage.setItem("cartItems", JSON.stringify(state.items));
};

/**
 * Creates a slice for the cart with an initial state and reducers to handle cart actions.
 * This includes actions to clear the cart, fetch items, update the cart, and remove items from the cart.
 */
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /**
     * Clears the cart state and removes cart data from localStorage.
     * Sets the items to an empty array and total quantity to zero.
     *
     * @param {Object} state - The current state of the cart.
     */
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      localStorage.removeItem("cartItems");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.fulfilled, updateStateAndLocalStorage)
      .addCase(updateCart.fulfilled, updateStateAndLocalStorage)
      .addCase(removeItemFromCart.fulfilled, updateStateAndLocalStorage);
  },
});

export default cartSlice.reducer;
