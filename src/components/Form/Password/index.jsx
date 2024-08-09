import React from "react";
import PropTypes from "prop-types";
import { Field } from "react-final-form";
import FieldInput from "../InputField";
import Label from "../Label";

function PasswordField({
  name = "password",
  placeholder = "Enter your password",
  label = "Password",
}) {
  const validatePassword = (value) => {
    if (!value) {
      return "Required";
    }
    if (value.length < 6) {
      return "Password must be at least 6 characters";
    }
    return undefined;
  };

  return (
    <Field name={name} validate={validatePassword}>
      {({ input, meta }) => (
        <div className="mb-4">
          <Label htmlFor={name}>{label}</Label>
          <FieldInput
            id={name}
            type="password"
            placeholder={placeholder}
            input={input}
            meta={meta}
          />
        </div>
      )}
    </Field>
  );
}

PasswordField.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

export default PasswordField;
