import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SecondaryButton from './';

describe('PrimaryButton', () => {
  it('renders the button with the provided text', () => {
    render(<PrimaryButton>Click Me</PrimaryButton>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('changes appearance when disabled', () => {
    render(<PrimaryButton disabled>Click Me</PrimaryButton>);
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass('bg-pink-100 text-primary cursor-not-allowed');
    expect(button).toBeDisabled();
  });

  it('allows clicking when not disabled', () => {
    const handleClick = jest.fn();
    render(<PrimaryButton onClick={handleClick}>Click Me</PrimaryButton>);
    const button = screen.getByText('Click Me');
    fireEvent.click(button);
    expect(button).not.toBeDisabled();
  });
});
