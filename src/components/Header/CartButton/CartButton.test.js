import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CartButton from './';

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

// Mock del componente CartSidebar si es necesario
jest.mock('../../Cart', () => {
  return function DummyCartSidebar({ isOpen }) {
    return isOpen ? <div data-testid="cart-sidebar">Cart Sidebar</div> : null;
  };
});

const mockStore = configureStore([]);

describe('CartButton', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      cart: {
        totalQuantity: 3,
      },
    });
  });

  it('renders the cart button with total quantity badge when items are in the cart', () => {
    render(
      <Provider store={store}>
        <CartButton />
      </Provider>,
    );
    const badgeElement = screen.getByTestId('cart-quantity-badge');
    expect(badgeElement).toBeInTheDocument();
    expect(screen.getByTestId('toggle-cart-button')).toBeInTheDocument();
  });

  it('does not render the badge when total quantity is 0', () => {
    store = mockStore({
      cart: {
        totalQuantity: 0,
      },
    });

    render(
      <Provider store={store}>
        <CartButton />
      </Provider>,
    );
    expect(screen.queryByTestId('cart-quantity-badge')).not.toBeInTheDocument();
  });

  it('toggles the cart sidebar when the button is clicked', () => {
    render(
      <Provider store={store}>
        <CartButton />
      </Provider>,
    );
    const button = screen.getByTestId('toggle-cart-button');
    fireEvent.click(button);
    expect(screen.getByTestId('cart-sidebar')).toBeInTheDocument();
  });
});
