import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FieldInput from './';

describe('FieldInput', () => {
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
    render(<FieldInput {...defaultProps} />);
    const inputElement = screen.getByTestId('field-input');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('id', 'test-input');
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  it('applies error styles and shows error message when there is an error and the field is touched', () => {
    const errorProps = {
      ...defaultProps,
      meta: {
        error: 'This field is required',
        touched: true,
      },
    };
    render(<FieldInput {...errorProps} />);
    const inputElement = screen.getByTestId('field-input');
    expect(inputElement).toHaveClass('border-red-500');
    expect(screen.getByTestId('error-message')).toHaveTextContent(
      'This field is required',
    );
  });

  it('does not show error message or error styles when the field is not touched', () => {
    const untouchedProps = {
      ...defaultProps,
      meta: {
        error: 'This field is required',
        touched: false,
      },
    };
    render(<FieldInput {...untouchedProps} />);
    const inputElement = screen.getByTestId('field-input');
    expect(inputElement).toHaveClass('border-gray-300');
    expect(screen.queryByTestId('error-message')).not.toBeInTheDocument();
  });

  it('shows focus style when input is focused', () => {
    const focusedProps = {
      ...defaultProps,
      meta: {
        error: '',
        touched: true,
      },
    };
    render(<FieldInput {...focusedProps} />);
    const inputElement = screen.getByTestId('field-input');
    fireEvent.focus(inputElement);
    expect(inputElement).toHaveClass('focus:border-pink-500');
  });
});
