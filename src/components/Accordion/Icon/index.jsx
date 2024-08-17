import React from 'react';
import PropTypes from 'prop-types';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Icon = ({ isOpen }) => {
  return isOpen ? (
    <FaChevronUp className="text-black" />
  ) : (
    <FaChevronDown className="text-black" />
  );
};

Icon.propTypes = {
  isOpen: PropTypes.bool,
};

export default Icon;
