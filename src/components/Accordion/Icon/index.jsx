import React from 'react';
import PropTypes from 'prop-types';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Icon({ isOpen }) {
  return isOpen ? (
    <FaChevronUp className="text-gray-500" />
  ) : (
    <FaChevronDown className="text-gray-500" />
  );
}

Icon.propTypes = {
  isOpen: PropTypes.bool,
};

export default Icon;
