import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithFirebaseMocks } from '../../../utils/firebaseMocks';
import CartButton from './';

jest.mock('../../Cart', () => {
  return function DummyCartSidebar({ isOpen }) {
    return isOpen ? <div data-testid="cart-sidebar">Cart Sidebar</div> : null;
  };
});

describe('CartButton', () => {
  const initialState = {
    cart: {
      totalQuantity: 3,
    },
  };

  it('renders the cart button with total quantity badge when items are in the cart', () => {
    renderWithFirebaseMocks(<CartButton />, { initialState });
    const badgeElement = screen.getByTestId('cart-quantity-badge');
    expect(badgeElement).toBeInTheDocument();
    expect(screen.getByTestId('toggle-cart-button')).toBeInTheDocument();
  });

  it('does not render the badge when total quantity is 0', () => {
    renderWithFirebaseMocks(<CartButton />, {
      initialState: { cart: { totalQuantity: 0 } },
    });
    expect(screen.queryByTestId('cart-quantity-badge')).not.toBeInTheDocument();
  });

  it('toggles the cart sidebar when the button is clicked', () => {
    renderWithFirebaseMocks(<CartButton />, { initialState });
    const button = screen.getByTestId('toggle-cart-button');
    fireEvent.click(button);
    expect(screen.getByTestId('cart-sidebar')).toBeInTheDocument();
  });
});
