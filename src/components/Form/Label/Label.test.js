import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './';

describe('Label', () => {
  it('renders the label with correct text and htmlFor attribute', () => {
    render(<Label htmlFor="test-input">Test Label</Label>);

    const labelElement = screen.getByText('Test Label');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveAttribute('for', 'test-input');
  });

  it('renders the asterisk when required is true', () => {
    render(
      <Label htmlFor="test-input" required>
        Test Label
      </Label>,
    );

    const asteriskElement = screen.getByText('*');
    expect(asteriskElement).toBeInTheDocument();
  });

  it('does not render the asterisk when required is false', () => {
    render(<Label htmlFor="test-input">Test Label</Label>);

    expect(screen.queryByText('*')).not.toBeInTheDocument();
  });

  it('renders children content correctly', () => {
    render(
      <Label htmlFor="test-input">
        <span>Custom Label Content</span>
      </Label>,
    );

    const customContent = screen.getByText('Custom Label Content');
    expect(customContent).toBeInTheDocument();
  });
});
