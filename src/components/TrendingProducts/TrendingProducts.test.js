import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TrendingProducts from './TrendingProducts';
import * as hooks from '../../hooks';
import trendingProductsAnimation from './animations';

jest.mock('./animations');

describe('TrendingProducts', () => {
  const mockProducts = [
    {
      id: 1,
      title: 'Product 1',
      price: 10,
      description: 'Description 1',
      imageUrl: 'image1.jpg',
    },
    {
      id: 2,
      title: 'Product 2',
      price: 20,
      description: 'Description 2',
      imageUrl: 'image2.jpg',
    },
  ];

  const mockHandleAddSingleItemToCart = jest.fn();
  const mockHandleViewMore = jest.fn();

  beforeEach(() => {
    jest.spyOn(hooks, 'useProductCardActions').mockReturnValue({
      handleAddSingleItemToCart: mockHandleAddSingleItemToCart,
      handleViewMore: mockHandleViewMore,
    });
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
    expect(trendingProductsAnimation).toHaveBeenCalled();
  });
});
