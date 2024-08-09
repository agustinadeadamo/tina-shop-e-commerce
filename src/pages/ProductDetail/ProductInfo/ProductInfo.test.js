import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductInfo from './ProductInfo';

const mockProduct = {
  title: 'Sample Product',
  price: 99.99,
  description: 'This is a sample product.',
  rating: {
    rate: 4.5,
    count: 10,
  },
};

describe('ProductInfo', () => {
  const mockIncreaseQuantity = jest.fn();
  const mockDecreaseQuantity = jest.fn();
  const mockHandleAddToCart = jest.fn();

  it('renders product title, price, and description', () => {
    render(
      <ProductInfo
        product={mockProduct}
        quantity={1}
        increaseQuantity={mockIncreaseQuantity}
        decreaseQuantity={mockDecreaseQuantity}
        handleAddToCart={mockHandleAddToCart}
      />,
    );

    expect(screen.getByText('Sample Product')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
    expect(screen.getByText('This is a sample product.')).toBeInTheDocument();
  });

  it('renders secondary components like ColorSection, Accordion, and ReviewsPoints', () => {
    render(
      <ProductInfo
        product={mockProduct}
        quantity={1}
        increaseQuantity={mockIncreaseQuantity}
        decreaseQuantity={mockDecreaseQuantity}
        handleAddToCart={mockHandleAddToCart}
      />,
    );

    expect(screen.getByText(/choose a color/i)).toBeInTheDocument();
    expect(screen.getByText(/product details/i)).toBeInTheDocument();
    expect(screen.getByText(/4.5/i)).toBeInTheDocument();
  });
});
