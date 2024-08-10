import React from "react";
import PropTypes from "prop-types";

function Label({ htmlFor, children, required = false, dataTestid = "" }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-gray-700 mb-1"
      data-testid={dataTestid}
    >
      {children} {required && <span>*</span>}
    </label>
  );
}

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  required: PropTypes.bool,
  dataTestid: PropTypes.string,
};

export default Label;
