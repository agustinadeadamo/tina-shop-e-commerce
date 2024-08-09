import React from 'react';
import { render, screen } from '@testing-library/react';
import { Form } from 'react-final-form';
import PasswordField from './';

describe('PasswordField', () => {
  const renderPasswordField = (initialValues = {}) =>
    render(
      <Form
        onSubmit={() => {}}
        initialValues={initialValues}
        render={() => <PasswordField />}
      />,
    );

  it('renders the password field with default props', () => {
    renderPasswordField();

    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/enter your password/i),
    ).toBeInTheDocument();
  });

  it('shows required error when password is not provided', async () => {
    renderPasswordField();

    // Trigger validation
    const passwordInput = screen.getByLabelText(/password/i);
    passwordInput.focus();
    passwordInput.blur();

    expect(await screen.findByText(/required/i)).toBeInTheDocument();
  });

  it('shows error when password is less than 6 characters', async () => {
    renderPasswordField();

    const passwordInput = screen.getByLabelText(/password/i);
    passwordInput.focus();
    passwordInput.blur();

    // Simulate entering a short password
    fireEvent.change(passwordInput, { target: { value: '123' } });
    passwordInput.blur();

    expect(
      await screen.findByText(/password must be at least 6 characters/i),
    ).toBeInTheDocument();
  });

  it('does not show error when a valid password is entered', async () => {
    renderPasswordField();

    const passwordInput = screen.getByLabelText(/password/i);
    fireEvent.change(passwordInput, { target: { value: 'validpassword' } });
    passwordInput.blur();

    expect(screen.queryByText(/required/i)).not.toBeInTheDocument();
    expect(
      screen.queryByText(/password must be at least 6 characters/i),
    ).not.toBeInTheDocument();
  });
});
