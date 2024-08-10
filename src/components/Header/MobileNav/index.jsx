import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavMenuItems from "../NavMenuItems";
import CartButton from "../CartButton";
import AuthButton from "../AuthButton";

function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="md:hidden">
      <div className="flex items-center">
        <CartButton />
        <button
          type="button"
          className="text-gray-700 hover:text-gray-900 focus:outline-none"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          data-testid="menu-toggle-button"
        >
          {isMenuOpen ? (
            <FaTimes className="h-6 w-6" data-testid="close-icon" />
          ) : (
            <FaBars className="h-6 w-6" data-testid="open-icon" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile Navigation"
          className="absolute top-16 left-0 w-full bg-white border-t border-gray-200 z-10"
          data-testid="mobile-menu"
        >
          <div className="container mx-auto px-4 py-4">
            <NavMenuItems
              onLinkClick={toggleMenu}
              data-testid="nav-menu-items"
            />
            <div className="mt-4">
              <AuthButton />
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}

export default MobileNav;
