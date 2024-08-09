import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db, auth } from '../../firebase-config';
import handleError from '../utils/handleError';

// Returns a reference to the current user's cart document in Firestore
const getCartRef = () => {
  const userId = auth.currentUser.uid;
  return doc(db, 'carts', userId);
};

// Fetches the cart items from Firestore for the authenticated user
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

// Synchronizes the local cart items with the Firestore database
export const syncCartWithDB = async cartItems => {
  try {
    const cartRef = getCartRef();
    await setDoc(cartRef, { items: cartItems });
  } catch (error) {
    handleError(error);
  }
};
