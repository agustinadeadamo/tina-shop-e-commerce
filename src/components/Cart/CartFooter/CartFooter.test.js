import React from 'react';
import { render, screen } from '@testing-library/react';
import CartFooter from './';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers

describe('CartFooter', () => {
  it('does not render when subtotal is not provided', () => {
    const { container } = render(
      <CartFooter subtotal={null} loading={false} />,
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('renders the correct subtotal, delivery costs, and total', () => {
    render(<CartFooter subtotal={100.25} loading={false} />);

    expect(screen.getByText('Subtotal')).toBeInTheDocument();
    expect(screen.getByText('$100.25')).toBeInTheDocument();
    expect(screen.getByText('Total (VAT included)')).toBeInTheDocument();
    expect(screen.getByText('$100.25')).toBeInTheDocument();
  });

  it('disables the button when loading is true', () => {
    render(<CartFooter subtotal={100.25} loading={true} />);
    expect(
      screen.getByRole('button', { name: /proceed to checkout/i }),
    ).toBeDisabled();
  });

  it('enables the button when loading is false', () => {
    render(<CartFooter subtotal={100.25} loading={false} />);
    expect(
      screen.getByRole('button', { name: /proceed to checkout/i }),
    ).toBeEnabled();
  });
});
