import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { Form } from 'react-final-form';
import PasswordField from './';

describe('PasswordField', () => {
  const renderPasswordField = (initialValues = {}) =>
    render(
      <Form
        onSubmit={() => {}}
        initialValues={initialValues}
        render={() => <PasswordField />}
      />
    );

  it('renders the password field with default props', () => {
    renderPasswordField();
    expect(screen.getByTestId('password-label')).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toBeInTheDocument();
  });

  it('shows required error when password is not provided', async () => {
    renderPasswordField();
    const passwordInput = screen.getByTestId('password-input');
    act(() => {
      passwordInput.focus();
      passwordInput.blur();
    });
    expect(await screen.findByTestId('password-error')).toHaveTextContent(
      'Required'
    );
  });
});
