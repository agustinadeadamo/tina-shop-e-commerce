import React from 'react';
import { render, screen } from '@testing-library/react';
import CartFooter from './';

describe('CartFooter', () => {
  it('does not render when subtotal is not provided', () => {
    const { container } = render(<CartFooter subtotal={0} loading={false} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders the correct subtotal, delivery costs, and total', () => {
    render(<CartFooter subtotal={100.25} loading={false} />);
    expect(screen.getByText('Subtotal')).toBeInTheDocument();
    expect(screen.getByTestId('subtotal-amount')).toHaveTextContent('$100.25');
    expect(screen.getByTestId('delivery-cost')).toHaveTextContent('FREE');
    expect(screen.getByTestId('total-amount')).toHaveTextContent('$100.25');
  });

  it('disables the button when loading is true', () => {
    render(<CartFooter subtotal={100.25} loading={true} />);
    expect(screen.getByTestId('checkout-button')).toBeDisabled();
  });

  it('enables the button when loading is false', () => {
    render(<CartFooter subtotal={100.25} loading={false} />);
    expect(screen.getByTestId('checkout-button')).toBeEnabled();
  });
});
