import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

/**
 * Mock Firebase initialization to prevent real Firebase setup during testing.
 */
jest.mock('firebase/app', () => {
  return {
    initializeApp: jest.fn(),
  };
});

/**
 * Mock Firebase Authentication functions to prevent actual auth operations during testing.
 */
jest.mock('firebase/auth', () => {
  return {
    getAuth: jest.fn(),
    signInWithEmailAndPassword: jest.fn(),
    signOut: jest.fn(),
    onAuthStateChanged: jest.fn(),
  };
});

/**
 * Mock Firebase Firestore functions to prevent real database interactions during testing.
 */
jest.mock('firebase/firestore', () => {
  return {
    getFirestore: jest.fn(),
    collection: jest.fn(),
    getDocs: jest.fn(),
  };
});

/**
 * Create a mock Redux store for testing components connected to Redux.
 */
const mockStore = configureStore([]);

/**
 * Utility function to render a React component within a mocked Redux Provider and Firebase setup.
 * This function standardizes the testing environment setup, making it easier to test components that rely on Redux and Firebase.
 *
 * @param {React.ReactElement} content - The component to render.
 * @param {object} options - Additional options for the render function.
 * @param {object} options.initialState - Initial state for the mock Redux store.
 * @param {object} options.store - Custom store for the mock Redux Provider.
 * @param {object} options.renderOptions - Additional options passed to the render function.
 * @returns {object} - Returns the result of the render function from '@testing-library/react'.
 */
export const renderWithFirebaseMocks = (
  content,
  { initialState = {}, store = mockStore(initialState), ...renderOptions } = {},
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  return render(content, { wrapper: Wrapper, ...renderOptions });
};
