import React from "react";
import PropTypes from "prop-types";

function PrimaryButton({
  children,
  onClick,
  type = "button",
  disabled = false,
}) {
  const buttonClasses = `py-2 px-4 w-full transition-colors duration-300 text-lg text-sm lg:text-base
  ${
    disabled
      ? "bg-pink-100 text-primary cursor-not-allowed"
      : "bg-primary text-white"
  }`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

export default PrimaryButton;
