import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ColorOption from './';

describe('ColorOption', () => {
  it('applies the correct styles when selected', () => {
    const mockOnSelect = jest.fn();
    render(
      <ColorOption color="green" isSelected={true} onSelect={mockOnSelect} />,
    );
    const colorOption = screen.getByRole('button', {
      name: /select color green/i,
    });
    expect(colorOption).toHaveClass('border-2 border-gray-800');
  });
});
