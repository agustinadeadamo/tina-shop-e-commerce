import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  id,
  type,
  placeholder,
  input,
  meta,
  dataTestid = '',
}) => {
  const inputClasses = `p-2 border-b-2 text-sm ${
    meta.error && meta.touched
      ? 'border-red-500 focus:border-red-500'
      : 'border-gray-300 focus:border-primary'
  } w-full outline-none focus:ring-0`;

  return (
    <div className="mb-4 w-full">
      <input
        {...input}
        id={id}
        type={type}
        placeholder={placeholder}
        className={inputClasses}
        data-testid={dataTestid}
      />
      {meta.error && meta.touched && (
        <p className="text-red-500 text-xs mt-1">{meta.error}</p>
      )}
    </div>
  );
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  dataTestid: PropTypes.string,
};

export default InputField;
