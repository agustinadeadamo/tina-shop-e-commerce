import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SecondaryButton from './';

describe('SecondaryButton', () => {
  it('renders the button with the provided text', () => {
    render(<SecondaryButton>Click Me</SecondaryButton>);
    const button = screen.getByTestId('secondary-button');
    expect(button).toHaveTextContent('Click Me');
  });

  it('changes appearance when disabled', () => {
    render(<SecondaryButton disabled>Click Me</SecondaryButton>);
    const button = screen.getByTestId('secondary-button');
    expect(button).toHaveClass('bg-pink-100 text-primary cursor-not-allowed');
    expect(button).toBeDisabled();
  });

  it('allows clicking when not disabled', () => {
    const handleClick = jest.fn();
    render(<SecondaryButton onClick={handleClick}>Click Me</SecondaryButton>);
    const button = screen.getByTestId('secondary-button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(button).not.toBeDisabled();
  });
});
