import React from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

function ErrorPopup({ message, onClose }) {
  return (
    <div className="fixed top-[50px] left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-4 rounded shadow-lg z-50">
      <p>{message}</p>
      <button
        type="button"
        aria-label="close modal"
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
      >
        <FaTimes />
      </button>
    </div>
  );
}

ErrorPopup.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ErrorPopup;
