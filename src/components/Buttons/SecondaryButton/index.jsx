import React from 'react';
import PropTypes from 'prop-types';

const SecondaryButton = ({ children, onClick, type, disabled = false }) => {
  const buttonClasses = `py-2 px-4 text-primary w-full transition-colors duration-300 text-xs uppercase font-semibold
    ${
      disabled
        ? 'bg-neutral-300 text-primary cursor-not-allowed'
        : 'border-b-2 border-transparent underline'
    }
  `;

  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {children}
    </button>
  );
};

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
};

export default SecondaryButton;
