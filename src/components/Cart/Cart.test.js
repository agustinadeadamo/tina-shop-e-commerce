import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithFirebaseMocks } from '../../utils/firebaseMocks';
import CartSidebar from './';
import errorMesajes from '../../constants/errorMesajes';

jest.mock('../../actions/cart', () => ({
  removeItemFromCart: jest.fn(() => {
    throw new Error('Test Error');
  }),
  updateCart: jest.fn(),
}));

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
  it('renders CartSidebar with items', () => {
    renderWithFirebaseMocks(
      <CartSidebar isOpen={true} toggleCart={jest.fn()} />,
      {
        initialState,
      }
    );
    expect(screen.getByText('Test Product 1')).toBeInTheDocument();
    expect(screen.getByText('Test Product 2')).toBeInTheDocument();
    expect(screen.getByText('$100.00')).toBeInTheDocument();
    expect(screen.getByText('$75.00')).toBeInTheDocument();
  });

  it('displays empty cart message when there are no items', () => {
    renderWithFirebaseMocks(
      <CartSidebar isOpen={true} toggleCart={jest.fn()} />,
      {
        initialState: { cart: { items: [] } },
      }
    );
    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
  });

  it('renders error message when error occurs', () => {
    renderWithFirebaseMocks(
      <CartSidebar isOpen={true} toggleCart={jest.fn()} />,
      {
        initialState,
      }
    );
    fireEvent.click(
      screen.getByRole('button', { name: /Remove Test Product 1 from cart/i })
    );
    expect(screen.getByText(errorMesajes.REMOVE_ITEM)).toBeInTheDocument();
  });
});
