import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductsList from './';
import * as hooks from '../../../hooks';

jest.mock('../../../hooks');

describe('ProductsList', () => {
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
    hooks.useProductCardActions.mockReturnValue({
      handleAddSingleItemToCart: mockHandleAddSingleItemToCart,
      handleViewMore: mockHandleViewMore,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('does not render if productsToShow is not provided', () => {
    render(<ProductsList productsToShow={null} />);
    expect(screen.queryByRole('grid')).not.toBeInTheDocument();
  });

  it('renders the list of products correctly', () => {
    render(<ProductsList productsToShow={mockProducts} />);
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });
});
