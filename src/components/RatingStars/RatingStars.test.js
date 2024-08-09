import React from 'react';
import { render, screen } from '@testing-library/react';
import RatingStars from './RatingStars';

describe('RatingStars', () => {
  it('renders the correct number of filled and empty stars based on rate', () => {
    render(<RatingStars rate={3} />);

    // Verifica que se renderizan 3 estrellas llenas
    expect(screen.getAllByRole('img', { name: /star/i })).toHaveLength(5);
    const filledStars = screen.getAllByRole('img', { name: /star/i });
    expect(
      filledStars.filter(icon => icon.classList.contains('fa-star')),
    ).toHaveLength(3);
    expect(
      filledStars.filter(icon => icon.classList.contains('fa-star-o')),
    ).toHaveLength(2);
  });

  it('rounds the rate correctly and renders stars', () => {
    render(<RatingStars rate={4.6} />);

    // Verifica que se redondea a 5 estrellas llenas
    const filledStars = screen.getAllByRole('img', { name: /star/i });
    expect(
      filledStars.filter(icon => icon.classList.contains('fa-star')),
    ).toHaveLength(5);
    expect(
      filledStars.filter(icon => icon.classList.contains('fa-star-o')),
    ).toHaveLength(0);
  });

  it('applies the size class correctly', () => {
    render(<RatingStars rate={2} size="text-lg" />);

    // Verifica que las estrellas tienen la clase de tamaño personalizada
    const stars = screen.getAllByRole('img', { name: /star/i });
    stars.forEach(star => {
      expect(star).toHaveClass('text-lg');
    });
  });
});
