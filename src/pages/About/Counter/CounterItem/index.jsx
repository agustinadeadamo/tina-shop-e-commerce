import React from 'react';
import PropTypes from 'prop-types';

const CounterItem = ({ innerRef, label }) => {
  return (
    <div className="text-center w-full sm:w-auto">
      <span
        ref={innerRef}
        className="text-4xl sm:text-5xl font-bold text-gray-800"
      >
        0
      </span>
      <p className="text-lg">{label}</p>
    </div>
  );
};

CounterItem.propTypes = {
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  label: PropTypes.string.isRequired,
};

export default CounterItem;
