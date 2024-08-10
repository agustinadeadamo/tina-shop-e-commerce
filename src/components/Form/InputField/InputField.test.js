import React from 'react';
import { render, screen } from '@testing-library/react';
import InputField from './';

describe('InputField', () => {
  const defaultProps = {
    id: 'test-input',
    type: 'text',
    placeholder: 'Enter text',
    input: {
      name: 'test',
      value: '',
      onChange: jest.fn(),
      onBlur: jest.fn(),
      onFocus: jest.fn(),
    },
    meta: {
      error: '',
      touched: false,
    },
  };

  it('renders the input field with correct props', () => {
    render(<InputField {...defaultProps} />);

    const inputElement = screen.getByPlaceholderText('Enter text');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('id', 'test-input');
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  it('applies error styles and shows error message when there is an error and the field is touched', () => {
    const errorProps = {
      ...defaultProps,
      meta: {
        error: 'Required field',
        touched: true,
      },
    };
    render(<InputField {...errorProps} />);

    const inputElement = screen.getByPlaceholderText('Enter text');
    expect(inputElement).toHaveClass('border-red-500');
    expect(screen.getByText('Required field')).toBeInTheDocument();
  });

  it('does not show error message or error styles when the field is not touched', () => {
    const untouchedProps = {
      ...defaultProps,
      meta: {
        error: 'Required field',
        touched: false,
      },
    };
    render(<InputField {...untouchedProps} />);

    const inputElement = screen.getByPlaceholderText('Enter text');
    expect(inputElement).toHaveClass('border-gray-300');
    expect(screen.queryByText('Required field')).not.toBeInTheDocument();
  });

  it('shows focus style when input is focused', () => {
    const focusedProps = {
      ...defaultProps,
      meta: {
        error: '',
        touched: true,
      },
    };
    render(<InputField {...focusedProps} />);

    const inputElement = screen.getByPlaceholderText('Enter text');
    inputElement.focus();
    expect(inputElement).toHaveClass('focus:border-primary');
  });
});
