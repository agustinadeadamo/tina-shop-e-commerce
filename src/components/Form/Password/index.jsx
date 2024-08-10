import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import FieldInput from '../InputField';
import Label from '../Label';

const PasswordField = ({
  name = 'password',
  placeholder = 'Enter your password',
  label = 'Password',
}) => {
  const validatePassword = (value) => {
    if (!value) {
      return 'Required';
    }
    if (value.length < 6) {
      return 'Password must be at least 6 characters';
    }
    return undefined;
  };

  return (
    <Field name={name} validate={validatePassword}>
      {({ input, meta }) => (
        <div className="mb-4">
          <Label htmlFor={name} dataTestid="password-label">
            {label}
          </Label>
          <FieldInput
            id={name}
            type="password"
            placeholder={placeholder}
            input={input}
            meta={meta}
            dataTestid="password-input"
          />
          {meta.error && meta.touched && (
            <p
              className="text-red-500 text-xs mt-1"
              data-testid="password-error"
            >
              {meta.error}
            </p>
          )}
        </div>
      )}
    </Field>
  );
};

PasswordField.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

export default PasswordField;
