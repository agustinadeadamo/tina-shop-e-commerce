import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CartButton from './';

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

    const badgeElement = screen.getByText('3');
    expect(badgeElement).toBeInTheDocument();
    expect(screen.getByLabelText(/toggle cart/i)).toBeInTheDocument();
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

    expect(screen.queryByText('0')).not.toBeInTheDocument();
  });

  it('toggles the cart sidebar when the button is clicked', () => {
    render(
      <Provider store={store}>
        <CartButton />
      </Provider>,
    );

    const button = screen.getByLabelText(/toggle cart/i);
    fireEvent.click(button);

    // Assuming that `CartSidebar` has a testid or similar to check if it renders
    expect(screen.getByTestId('cart-sidebar')).toBeInTheDocument();
  });
});
