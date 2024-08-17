import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const dropdownVariants = {
  hidden: { opacity: 0, y: -20, height: 0 },
  visible: { opacity: 1, y: 0, height: 'auto' },
  exit: { opacity: 0, y: -20, height: 0 },
};

const DropdownMenu = ({ isOpen, items, onClose }) => {
  const menuItems = useMemo(
    () =>
      items.map(({ url, label }) => (
        <li key={url} className="border-b last:border-b-0">
          <NavLink
            to={url}
            className="uppercase block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={onClose}
          >
            {label}
          </NavLink>
        </li>
      )),
    [items, onClose]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          className="uppercase absolute mt-2 bg-white shadow-lg rounded-md w-48 z-10 border border-gray-200 right-0"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={dropdownVariants}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          role="menu"
        >
          {menuItems}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

DropdownMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DropdownMenu;
