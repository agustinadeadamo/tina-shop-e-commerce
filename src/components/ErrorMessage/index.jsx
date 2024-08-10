import React from 'react';
import PropTypes from 'prop-types';
import ErrorSvg from '../../images/error-message.svg';

function ErrorMessage({ message }) {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <ErrorSvg className="w-60 h-60 mb-4" />
      <p className="text-center text-primary">{message}</p>
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
