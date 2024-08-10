import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CartSidebar from './';
import errorMesajes from '../../constants/errorMesajes'; // Asegúrate de importar errorMesajes

// Mock de Firebase para evitar inicialización durante las pruebas
jest.mock('firebase/app', () => {
  return {
    initializeApp: jest.fn(),
  };
});

jest.mock('firebase/auth', () => {
  return {
    getAuth: jest.fn(),
    signInWithEmailAndPassword: jest.fn(),
    signOut: jest.fn(),
    onAuthStateChanged: jest.fn(),
  };
});

jest.mock('firebase/firestore', () => {
  return {
    getFirestore: jest.fn(),
    collection: jest.fn(),
    getDocs: jest.fn(),
  };
});

const mockStore = configureStore([]);
const initialState = {
  cart: {
    items: [
      {
        id: 1,
        title: 'Test Product 1',
        quantity: 2,
        price: 50.0,
        image: 'image-url-1',
        size: 'M',
      },
      {
        id: 2,
        title: 'Test Product 2',
        quantity: 1,
        price: 75.0,
        image: 'image-url-2',
        size: 'L',
      },
    ],
  },
};

describe('CartSidebar', () => {
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('renders CartSidebar with items', () => {
    render(
      <Provider store={store}>
        <CartSidebar isOpen={true} toggleCart={jest.fn()} />
      </Provider>,
    );

    expect(screen.getByText('Test Product 1')).toBeInTheDocument();
    expect(screen.getByText('Test Product 2')).toBeInTheDocument();
    expect(screen.getByText('$100.00')).toBeInTheDocument(); // subtotal of first product
    expect(screen.getByText('$75.00')).toBeInTheDocument(); // subtotal of second product
  });

  it('displays empty cart message when there are no items', () => {
    store = mockStore({
      cart: {
        items: [],
      },
    });

    render(
      <Provider store={store}>
        <CartSidebar isOpen={true} toggleCart={jest.fn()} />
      </Provider>,
    );

    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
  });

  it('renders error message when error occurs', () => {
    render(
      <Provider store={store}>
        <CartSidebar isOpen={true} toggleCart={jest.fn()} />
      </Provider>,
    );

    fireEvent.click(
      screen.getByRole('button', { name: /Remove Test Product 1 from cart/i }),
    );
    expect(screen.getByText(errorMesajes.REMOVE_ITEM)).toBeInTheDocument();
  });
});
