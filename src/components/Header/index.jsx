import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CartButton from './CartButton';
import AuthButton from './AuthButton';
import MenuButton from './MenuButton';
import { opacity, background } from './animationVariants';
import MenuPanel from './MenuPanel';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleMenuToggleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleToggleMenu();
    }
  };

  return (
    <div className="header bg-white fixed p-[10px] z-20 w-full box-border">
      <div className="bar uppercase text-xs font-normal relative flex items-center h-14 justify-center ">
        {/* Logo linking to the homepage */}
        <Link
          to="/"
          className="text-xl font-bold no-underline text-black absolute left-0"
        >
          Tina
        </Link>

        {/* Menu button to toggle the navigation panel */}
        <MenuButton isActive={isMenuOpen} onClick={handleToggleMenu} />

        {/* Cart and Auth */}
        <motion.div
          variants={opacity}
          animate={!isMenuOpen ? 'open' : 'closed'}
          className="flex gap-7 absolute right-0"
        >
          <CartButton />
          <AuthButton />
        </motion.div>
      </div>

      {/* Background overlay that toggles with the menu */}
      <motion.div
        onClick={handleToggleMenu}
        variants={background}
        onKeyDown={handleMenuToggleKeyDown}
        role="button"
        initial="initial"
        animate={isMenuOpen ? 'open' : 'closed'}
        className="background bg-black opacity-50 absolute w-full h-full left-0 top-full"
      />

      {/* Menu panel that slides in/out based on isMenuOpen state */}
      <AnimatePresence mode="wait">
        {isMenuOpen && <MenuPanel onClickLink={handleToggleMenu} />}
      </AnimatePresence>
    </div>
  );
};

export default Header;
