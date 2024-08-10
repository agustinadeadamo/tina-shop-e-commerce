import React from 'react';
import PropTypes from 'prop-types';

const ColorOption = ({ color, isSelected, onSelect, dataTestid = '' }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onSelect();
    }
  };

  const getColorClasses = () => {
    return `w-8 h-8 rounded-full cursor-pointer ${
      isSelected ? 'border-2 border-gray-800' : 'border border-gray-300'
    }`;
  };

  return (
    <div
      onClick={onSelect}
      className={getColorClasses()}
      style={{ backgroundColor: color }}
      aria-label={`Select color ${color}`}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      data-testid={dataTestid}
    />
  );
};

ColorOption.propTypes = {
  color: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  dataTestid: PropTypes.string,
};

export default ColorOption;
