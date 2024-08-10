import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ColorSection from './';
import possibleColors from './colorsData';

describe('ColorSection', () => {
  it('renders the correct number of color options', () => {
    render(<ColorSection />);
    possibleColors.forEach((color) => {
      expect(screen.getByTestId(`color-option-${color}`)).toBeInTheDocument();
    });
  });

  it('selects the correct color when an option is clicked', () => {
    render(<ColorSection />);
    const secondColor = possibleColors[1];
    const secondColorOption = screen.getByTestId(`color-option-${secondColor}`);
    fireEvent.click(secondColorOption);
    expect(secondColorOption).toHaveClass('border-2 border-gray-800');
  });
});
