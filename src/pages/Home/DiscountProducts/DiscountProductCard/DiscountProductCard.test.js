import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DiscountProductCard from './';
import * as animations from '../../../../utils/animations';
import { useNavigate } from 'react-router-dom';

// Mock animations and navigation to avoid real behaviors during tests
jest.mock('../../../../utils/animations');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

// Test data that you will use in all the tests
const mockProps = {
  title: 'Special Offer',
  subtitle: 'Limited Time Only',
  buttonCopy: 'Shop Now',
  image: 'https://via.placeholder.com/150',
  alt: 'Discounted Product',
  className: 'custom-class',
  animation: {},
  position: 'bottom-0 left-0',
  url: '/special-offer',
};

const renderWithRouter = (content, { route = '/' } = {}) => {
  return render(
    <MemoryRouter initialEntries={[route]}>{content}</MemoryRouter>,
  );
};

describe('DiscountProductCard', () => {
  it('correctly displays the title, subtitle, and button text', () => {
    renderWithRouter(<DiscountProductCard {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.subtitle)).toBeInTheDocument();
    expect(screen.getByText(mockProps.buttonCopy)).toBeInTheDocument();
  });

  it('executes the animation on intersection', () => {
    renderWithRouter(<DiscountProductCard {...mockProps} />);
    expect(animations.animateOnIntersection).toHaveBeenCalledWith(
      expect.anything(),
      mockProps.animation,
    );
  });

  it('navigates to the correct URL when the button is clicked', () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);
    renderWithRouter(<DiscountProductCard {...mockProps} />);
    fireEvent.click(screen.getByText(mockProps.buttonCopy));
    expect(mockNavigate).toHaveBeenCalledWith(mockProps.url);
  });
});
