import React from 'react';
import PropTypes from 'prop-types';
import { CiCircleAlert } from 'react-icons/ci';

const ErrorMessage = ({ message }) => {
  return (
    <div className="w-full h-screen flex flex-col items-center mt-[100px]">
      <CiCircleAlert className="text-6xl text-red-600" />
      <p className="text-center text-primary mt-4">{message}</p>
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
