import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DiscountProductCard from './';
import * as animations from '../../../../utils/animations';
import { useNavigate } from 'react-router-dom';

jest.mock('../../../../utils/animations');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

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

describe('DiscountProductCard', () => {
  it('renders the title, subtitle, and button text correctly', () => {
    render(
      <MemoryRouter>
        <DiscountProductCard {...mockProps} />
      </MemoryRouter>,
    );
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.subtitle)).toBeInTheDocument();
    expect(screen.getByText(mockProps.buttonCopy)).toBeInTheDocument();
  });

  it('executes the animation on intersection', () => {
    render(
      <MemoryRouter>
        <DiscountProductCard {...mockProps} />
      </MemoryRouter>,
    );
    expect(animations.animateOnIntersection).toHaveBeenCalledWith(
      expect.anything(),
      mockProps.animation,
    );
  });

  it('navigates to the correct URL when the button is clicked', () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);
    render(
      <MemoryRouter>
        <DiscountProductCard {...mockProps} />
      </MemoryRouter>,
    );
    fireEvent.click(screen.getByText(mockProps.buttonCopy));
    expect(mockNavigate).toHaveBeenCalledWith(mockProps.url);
  });
});
