import React from 'react';
import PropTypes from 'prop-types';

const FieldInput = ({ id, type, placeholder, input, meta }) => {
  const inputClasses = `p-2 border ${
    meta.error && meta.touched
      ? 'border-red-500 focus:border-red-500'
      : 'border-gray-300 focus:border-pink-500'
  } rounded w-full outline-none focus:ring-2 focus:ring-pink-200`;

  return (
    <div className="mb-4 w-full">
      <input
        {...input}
        id={id}
        type={type}
        placeholder={placeholder}
        className={inputClasses}
        data-testid="field-input"
      />
      {meta.error && meta.touched && (
        <p className="text-red-500 text-xs mt-1" data-testid="error-message">
          {meta.error}
        </p>
      )}
    </div>
  );
};

FieldInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

export default FieldInput;
