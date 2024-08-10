import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, children, width = 'md:max-w-screen-md' }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-gray-600 bg-opacity-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div
        className={`bg-white rounded shadow-lg relative w-full h-full md:w-auto md:h-auto ${width} md:mx-auto`}
        tabIndex="-1"
      >
        <button
          type="button"
          aria-label="close modal"
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          <FaTimes />
        </button>
        <div className="p-4 overflow-y-auto h-full" id="modal-description">
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
};

export default Modal;
