import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { Form } from 'react-final-form';
import EmailField from './';

describe('EmailField', () => {
  const renderEmailField = (initialValues = {}) =>
    render(
      <Form
        onSubmit={() => {}}
        initialValues={initialValues}
        render={() => <EmailField />}
      />
    );

  it('renders the email field with correct label and placeholder', () => {
    renderEmailField();
    expect(screen.getByTestId('email-field-container')).toBeInTheDocument();
    expect(screen.getByTestId('email-input')).toHaveAttribute(
      'placeholder',
      'Enter your email'
    );
  });

  it('shows required error when email is not provided', async () => {
    renderEmailField();
    const emailInput = screen.getByTestId('email-input');
    act(() => {
      emailInput.focus();
      emailInput.blur();
    });
    expect(await screen.findByTestId('email-error-message')).toHaveTextContent(
      'Required'
    );
  });
});
