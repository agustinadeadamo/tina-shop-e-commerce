import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import QuantitySelector from './';

describe('QuantitySelector', () => {
  const defaultProps = {
    quantity: 2,
    increaseQuantity: jest.fn(),
    decreaseQuantity: jest.fn(),
    disabled: false,
  };

  it('displays the correct quantity', () => {
    render(<QuantitySelector {...defaultProps} />);
    const quantityInput = screen.getByTestId('quantity-input');
    expect(quantityInput).toHaveValue('2');
  });

  it('disables the buttons when disabled is true', () => {
    render(<QuantitySelector {...defaultProps} disabled />);
    const incrementButton = screen.getByTestId('increase-button');
    const decrementButton = screen.getByTestId('decrease-button');
    expect(incrementButton).toBeDisabled();
    expect(decrementButton).toBeDisabled();
  });

  it('renders the input as read-only', () => {
    render(<QuantitySelector {...defaultProps} />);
    const quantityInput = screen.getByTestId('quantity-input');
    expect(quantityInput).toHaveAttribute('readonly');
  });
});
