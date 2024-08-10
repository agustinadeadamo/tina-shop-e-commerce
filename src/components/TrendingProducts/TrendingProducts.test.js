import React from 'react';
import { render, screen } from '@testing-library/react';
import TrendingProducts from './';
import * as hooks from '../../hooks';

jest.mock('../../hooks', () => ({
  useProductCardActions: jest.fn(),
  useLazyLoad: jest.fn(),
}));

jest.mock('./animations');

describe('TrendingProducts', () => {
  const mockProducts = [
    {
      id: 1,
      title: 'Product 1',
      price: 10,
      description: 'Description 1',
      image: 'image1.jpg',
      rating: {
        rate: 4.5,
      },
    },
    {
      id: 2,
      title: 'Product 2',
      price: 20,
      description: 'Description 2',
      image: 'image2.jpg',
      rating: {
        rate: 4.0,
      },
    },
  ];

  const mockHandleAddSingleItemToCart = jest.fn();
  const mockHandleViewMore = jest.fn();

  beforeEach(() => {
    hooks.useProductCardActions.mockReturnValue({
      handleAddSingleItemToCart: mockHandleAddSingleItemToCart,
      handleViewMore: mockHandleViewMore,
    });
    hooks.useLazyLoad.mockReturnValue([jest.fn(), true]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('does not render if no products are provided', () => {
    render(<TrendingProducts products={[]} />);
    expect(screen.queryByText(/trending products/i)).not.toBeInTheDocument();
  });

  it('renders the products and applies animation on mount', () => {
    render(<TrendingProducts products={mockProducts} />);
    expect(screen.getByText(/trending products/i)).toBeInTheDocument();
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });
});
