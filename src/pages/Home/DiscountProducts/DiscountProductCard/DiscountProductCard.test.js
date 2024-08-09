import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DiscountProductCard from './DiscountProductCard';
import * as animations from '../../../../utils/animations';

jest.mock('../../../../utils/animations');

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

    // Verifica que el título, subtítulo y el texto del botón se renderizan correctamente
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

    // Verifica que la animación se llama cuando el componente se monta
    expect(animations.animateOnIntersection).toHaveBeenCalledWith(
      expect.anything(),
      mockProps.animation,
    );
  });

  it('navigates to the correct URL when the button is clicked', () => {
    render(
      <MemoryRouter>
        <DiscountProductCard {...mockProps} />
      </MemoryRouter>,
    );

    // Simula un clic en el botón
    fireEvent.click(screen.getByText(mockProps.buttonCopy));

    // Verifica que la URL cambia
    expect(window.location.pathname).toBe(mockProps.url);
  });
});
