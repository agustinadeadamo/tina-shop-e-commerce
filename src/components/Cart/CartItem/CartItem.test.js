import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CartItem from './';

const mockItem = {
  id: 1,
  image: 'image-url',
  title: 'Test Product',
  quantity: 2,
  price: 50.0,
  size: 'M',
};

describe('CartItem', () => {
  it('renders item details correctly', () => {
    render(
      <CartItem
        item={mockItem}
        handleDecreaseQuantity={jest.fn()}
        handleRemoveItem={jest.fn()}
        handleIncreaseQuantity={jest.fn()}
      />,
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Qty: 2')).toBeInTheDocument();
    expect(screen.getByText('$100.00')).toBeInTheDocument(); // 50 * 2
    expect(screen.getByText('M')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'image-url');
  });

  it('calls handleRemoveItem when remove button is clicked', () => {
    const handleRemoveItem = jest.fn();
    render(
      <CartItem
        item={mockItem}
        handleDecreaseQuantity={jest.fn()}
        handleRemoveItem={handleRemoveItem}
        handleIncreaseQuantity={jest.fn()}
      />,
    );

    fireEvent.click(
      screen.getByRole('button', { name: /Remove Test Product from cart/i }),
    );
    expect(handleRemoveItem).toHaveBeenCalledWith(mockItem);
  });

  it('calls handleIncreaseQuantity when increase button is clicked', () => {
    const handleIncreaseQuantity = jest.fn();
    render(
      <CartItem
        item={mockItem}
        handleDecreaseQuantity={jest.fn()}
        handleRemoveItem={jest.fn()}
        handleIncreaseQuantity={handleIncreaseQuantity}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: /increase quantity/i }));
    expect(handleIncreaseQuantity).toHaveBeenCalledWith(mockItem);
  });

  it('calls handleDecreaseQuantity when decrease button is clicked', () => {
    const handleDecreaseQuantity = jest.fn();
    render(
      <CartItem
        item={mockItem}
        handleDecreaseQuantity={handleDecreaseQuantity}
        handleRemoveItem={jest.fn()}
        handleIncreaseQuantity={jest.fn()}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: /decrease quantity/i }));
    expect(handleDecreaseQuantity).toHaveBeenCalledWith(mockItem);
  });
});
