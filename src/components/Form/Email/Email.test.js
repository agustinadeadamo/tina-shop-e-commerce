import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
    emailInput.focus();
    emailInput.blur();

    expect(await screen.findByText(/required/i)).toBeInTheDocument();
  });

  it('shows error when an invalid email is entered', async () => {
    renderEmailField();

    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    emailInput.blur();

    expect(
      await screen.findByText(/invalid email address/i),
    ).toBeInTheDocument();
  });

  it('does not show error when a valid email is entered', async () => {
    renderEmailField();

    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'valid@example.com' } });
    emailInput.blur();

    expect(
      screen.queryByText(/invalid email address/i),
    ).not.toBeInTheDocument();
    expect(screen.queryByText(/required/i)).not.toBeInTheDocument();
  });
});
