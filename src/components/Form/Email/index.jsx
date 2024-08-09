import React from "react";
import PropTypes from "prop-types";
import { Field } from "react-final-form";
import validator from "validator";
import FieldInput from "../InputField";
import Label from "../Label";

function EmailField({
  name = "email",
  placeholder = "Enter your email",
  label = "Email",
}) {
  const validateEmail = (value) => {
    if (!value) {
      return "Required";
    }
    if (!validator.isEmail(value)) {
      return "Invalid email address";
    }
    return undefined;
  };

  return (
    <Field name="email" validate={validateEmail}>
      {({ input, meta }) => (
        <div className="mb-4">
          <Label htmlFor={name} required>
            {label}
          </Label>
          <FieldInput
            id={name}
            type="email"
            placeholder={placeholder}
            input={input}
            meta={meta}
          />
        </div>
      )}
    </Field>
  );
}

EmailField.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

export default EmailField;
