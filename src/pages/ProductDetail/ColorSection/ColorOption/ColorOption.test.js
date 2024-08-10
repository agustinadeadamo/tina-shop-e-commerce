import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ColorOption from './ColorOption';

describe('ColorOption', () => {
  it('applies the correct styles when selected', () => {
    render(
      <ColorOption color="green" isSelected={true} onSelect={mockOnSelect} />,
    );

    const colorOption = screen.getByRole('button', {
      name: /select color green/i,
    });

    // Verifica que la clase de selección se aplica correctamente
    expect(colorOption).toHaveClass('border-2 border-gray-800');
  });
});
