import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const DropdownToggle = ({ label, isOpen, toggleDropdown }) => (
  <button
    onClick={toggleDropdown}
    className="text-black font-medium py-2 px-4 rounded-md flex items-center"
    aria-haspopup="true"
    aria-expanded={isOpen}
  >
    {label}
    <motion.span
      className="ml-2"
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <FaChevronDown />
    </motion.span>
  </button>
);

DropdownToggle.propTypes = {
  label: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
};

export default DropdownToggle;
