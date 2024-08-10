import React from 'react';
import PropTypes from 'prop-types';

function ResponsiveContainer({ children, customClass = '' }) {
  return (
    <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${customClass}`}>
      {children}
    </div>
  );
}

ResponsiveContainer.propTypes = {
  children: PropTypes.node.isRequired,
  customClass: PropTypes.string,
};

export default ResponsiveContainer;
