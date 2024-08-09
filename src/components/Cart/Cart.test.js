import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CartSidebar from './';

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

  it('disables buttons when loading is true', () => {
    render(
      <Provider store={store}>
        <CartSidebar isOpen={true} toggleCart={jest.fn()} />
      </Provider>,
    );

    const button = screen.getAllByRole('button')[0];
    fireEvent.click(button);
    expect(button).toBeDisabled();
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
