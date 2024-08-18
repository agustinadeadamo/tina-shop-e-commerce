import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import { contentVariants, containerVariants } from './animationVariants';

const Modal = ({ isOpen, onClose, children, width = 'md:max-w-screen-md' }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
          className="fixed inset-0 flex items-center justify-center z-50 bg-gray-600 bg-opacity-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={contentVariants}
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
};

export default Modal;
