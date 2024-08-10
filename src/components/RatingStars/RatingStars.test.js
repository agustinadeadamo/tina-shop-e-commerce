import React from 'react';
import { render, screen } from '@testing-library/react';
import RatingStars from './';

describe('RatingStars', () => {
  it('renders the correct number of filled and empty stars based on rate', () => {
    render(<RatingStars rate={3} />);

    const filledStars = screen
      .getAllByTestId(/star-/)
      .filter((_, index) => index < 3);
    const emptyStars = screen
      .getAllByTestId(/star-/)
      .filter((_, index) => index >= 3);

    expect(filledStars).toHaveLength(3);
    expect(emptyStars).toHaveLength(2);
  });

  it('rounds the rate correctly and renders stars', () => {
    render(<RatingStars rate={4.6} />);

    const filledStars = screen
      .getAllByTestId(/star-/)
      .filter((_, index) => index < 5);
    const emptyStars = screen
      .getAllByTestId(/star-/)
      .filter((_, index) => index >= 5);

    expect(filledStars).toHaveLength(5);
    expect(emptyStars).toHaveLength(0);
  });

  it('applies the size class correctly', () => {
    render(<RatingStars rate={2} size="text-lg" />);
    const stars = screen.getAllByTestId(/star-/);
    stars.forEach(star => {
      expect(star).toHaveClass('text-lg');
    });
  });
});
