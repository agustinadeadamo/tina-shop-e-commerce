import React from 'react';
import { render, screen } from '@testing-library/react';
import ReviewCard from './';

const mockReview = {
  name: 'Jane Doe',
  rating: 4,
  comment: 'Great product, really enjoyed using it!',
};

describe('ReviewCard', () => {
  it("renders the reviewer's name, rating, and comment correctly", () => {
    render(<ReviewCard review={mockReview} />);

    // Verifica que el nombre del revisor se renderiza correctamente
    expect(screen.getByText(mockReview.name)).toBeInTheDocument();

    // Verifica que el comentario del revisor se renderiza correctamente
    expect(screen.getByText(mockReview.comment)).toBeInTheDocument();

    // Verifica que la cantidad correcta de estrellas se renderiza
    const stars = screen.getAllByText(
      (content, element) => element.tagName.toLowerCase() === 'svg'
    );
    expect(stars).toHaveLength(mockReview.rating);
  });

  it('renders the correct number of stars based on the rating', () => {
    const { rerender } = render(
      <ReviewCard review={{ ...mockReview, rating: 3 }} />
    );

    // Verifica que la cantidad correcta de estrellas se renderiza con un rating de 3
    expect(
      screen.getAllByText(
        (content, element) => element.tagName.toLowerCase() === 'svg'
      )
    ).toHaveLength(3);

    // Cambia el rating a 5 y verifica que se renderizan 5 estrellas
    rerender(<ReviewCard review={{ ...mockReview, rating: 5 }} />);
    expect(
      screen.getAllByText(
        (content, element) => element.tagName.toLowerCase() === 'svg'
      )
    ).toHaveLength(5);
  });
});
