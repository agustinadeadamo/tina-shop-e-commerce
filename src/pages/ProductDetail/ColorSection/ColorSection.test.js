import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ColorSection from './ColorSection';

describe('ColorSection', () => {
  it('renders the correct number of color options', () => {
    render(<ColorSection />);

    // Verifica que se renderizan todas las opciones de color
    const colorOptions = screen.getAllByRole('button');
    expect(colorOptions).toHaveLength(possibleColors.length);
  });

  it('selects the correct color when an option is clicked', () => {
    render(<ColorSection />);

    const secondColorOption = screen.getAllByRole('button')[1];

    // Simula un clic en la segunda opción de color
    fireEvent.click(secondColorOption);

    // Verifica que la segunda opción ahora tiene la clase que indica que está seleccionada
    expect(secondColorOption).toHaveClass('border-2 border-gray-800');
  });
});
