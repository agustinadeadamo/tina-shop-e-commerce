// Checks if an item with the same ID as newItem exists in the items array
const findItem = (items, newItem) =>
  items.some((item) => item.id === newItem.id);

/**
 * Calculates the total quantity of items in the cart.
 * Takes into account that some products may have a quantity greater than one.
 *
 * @param {Array} items - Array of cart items.
 * @returns {number} - Total quantity of all items in the cart.
 */
export const calculateTotalQuantity = (items) =>
  items.reduce((acc, item) => acc + item.quantity, 0);

/**
 * Updates the quantity of an item in the cart.
 * If the new quantity is greater than zero, returns the updated item; otherwise, returns null.
 *
 * @param {Object} item - The cart item to update.
 * @param {number} quantityChange - The change in quantity (positive or negative).
 * @returns {Object|null} - Updated item object or null if the quantity is less than or equal to zero.
 */
export const updateItemQuantity = (item, quantityChange) => {
  const newQuantity = item.quantity + quantityChange;
  return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
};

/**
 * Modifies the cart items by adding a new item, updating the quantity of an existing item,
 * or removing an item if its quantity is reduced to zero.
 *
 * @param {Array} existingItems - Current array of cart items.
 * @param {Object} item - The item to add or update in the cart.
 * @param {number} quantityToChange - The amount to change the item's quantity by.
 * @returns {Array} - Updated array of cart items.
 */
export const modifyCartItems = (existingItems, item, quantityToChange) => {
  const itemExistsInCart = findItem(existingItems, item);

  // If the item exists in the cart, update its quantity
  if (itemExistsInCart) {
    return existingItems
      .map((existingItem) =>
        updateItemQuantity(
          existingItem,
          existingItem.id === item.id ? quantityToChange : 0
        )
      )
      .filter((existingItem) => existingItem !== null); // Remove items with null quantity
  }

  // If the item does not exist in the cart, add it with the specified quantity
  return [...existingItems, { ...item, quantity: quantityToChange }];
};

/**
 * Loads the initial cart items from localStorage.
 * If cart items are found in localStorage, it attempts to parse and return them with their total quantity.
 * If parsing fails or no items are found, returns an empty array and a total quantity of zero.
 *
 * @returns {Object} - Object containing the array of cart items and the total quantity.
 */
export const loadInitialCartItems = () => {
  const savedCartItems = localStorage.getItem('cartItems');
  if (savedCartItems) {
    try {
      const items = JSON.parse(savedCartItems);
      const totalQuantity = calculateTotalQuantity(items);
      return { items, totalQuantity };
    } catch {
      return { items: [], totalQuantity: 0 };
    }
  } else {
    return { items: [], totalQuantity: 0 };
  }
};

/**
 * Removes an item from the cart by filtering out the item with the specified ID.
 *
 * @param {Array} items - Current array of cart items.
 * @param {string} itemIdToRemove - ID of the item to remove from the cart.
 * @returns {Array} - Updated array of cart items with the specified item removed.
 */
export const removeItemFromCartItems = (items, itemIdToRemove) => {
  return items.filter((item) => item.id !== itemIdToRemove);
};
