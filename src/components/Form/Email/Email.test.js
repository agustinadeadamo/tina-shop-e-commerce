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
      />,
    );

  it('renders the email field with correct label and placeholder', () => {
    renderEmailField();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/enter your email/i),
    ).toBeInTheDocument();
  });

  it('shows required error when email is not provided', async () => {
    renderEmailField();
    const emailInput = screen.getByLabelText(/email/i);
    act(() => {
      emailInput.focus();
      emailInput.blur();
    });
    expect(await screen.findByText(/required/i)).toBeInTheDocument();
  });
});
