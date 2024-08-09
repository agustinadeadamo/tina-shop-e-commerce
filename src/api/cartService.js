import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db, auth } from '../../firebase-config';
import handleError from '../utils/handleError';

/**
 * Returns a reference to the current user's cart document in Firestore.
 * This function is used to generate a reference to the specific document
 * in the 'carts' collection for the authenticated user.
 * 
 * @returns {DocumentReference} - A reference to the user's cart document in Firestore.
 */
const getCartRef = () => {
  const userId = auth.currentUser.uid;
  return doc(db, 'carts', userId);
};

/**
 * Fetches the cart items from Firestore for the authenticated user.
 * If the cart document exists, it returns the items stored in the cart.
 * If the cart document does not exist, it returns an empty array.
 * 
 * @returns {Promise<Object[]>} - A promise that resolves to an array of cart items.
 */
export const fetchCartItemsFromDB = async () => {
  try {
    const cartRef = getCartRef();
    const cartSnap = await getDoc(cartRef);

    if (cartSnap.exists()) {
      return cartSnap.data().items;
    }
    return [];
  } catch (error) {
    handleError(error);
    return [];
  }
};

/**
 * Synchronizes the local cart items with the Firestore database.
 * This function updates the Firestore document with the latest cart items
 * for the authenticated user, ensuring that the database reflects the current state
 * of the user's cart.
 * 
 * @param {Object[]} cartItems - An array of cart items to sync with the Firestore database.
 * @returns {Promise<void>} - A promise that resolves when the synchronization is complete.
 */
export const syncCartWithDB = async cartItems => {
  try {
    const cartRef = getCartRef();
    await setDoc(cartRef, { items: cartItems });
  } catch (error) {
    handleError(error);
  }
};
