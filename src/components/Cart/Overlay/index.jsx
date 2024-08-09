import React from "react";
import PropTypes from "prop-types";

function Overlay({ isOpen, toggleCart }) {
  const handleKeyDown = (e) => {
    const keys = ["Escape", "Enter", " "];
    if (keys.includes(e.key)) {
      toggleCart();
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      onClick={toggleCart}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label="Close cart overlay"
    />
  );
}

Overlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleCart: PropTypes.func.isRequired,
};

export default React.memo(Overlay);
