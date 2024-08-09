import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function MenuItemLink({ to, children, onClick }) {
  const linkClasses =
    "block py-2 px-4 text-gray-700 hover:text-primary border-b-2 border-transparent hover:border-primary";

  return (
    <Link to={to} className={linkClasses} onClick={onClick}>
      {children}
    </Link>
  );
}

function NavMenuItems({ onLinkClick }) {
  return (
    <>
      <MenuItemLink to="/" onClick={onLinkClick}>
        Home
      </MenuItemLink>
      <MenuItemLink to="/store" onClick={onLinkClick}>
        Store
      </MenuItemLink>
      <MenuItemLink to="/about" onClick={onLinkClick}>
        About
      </MenuItemLink>
    </>
  );
}

MenuItemLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

NavMenuItems.propTypes = {
  onLinkClick: PropTypes.func,
};

export default NavMenuItems;
