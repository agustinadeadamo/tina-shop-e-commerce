import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { opacity } from '../animationVariants';

const MenuButton = ({ onClick, isActive }) => {
  const copyClasses = 'hidden md:block';
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onClick();
    }
  };

  const getBurgerClasses = useMemo(() => {
    return `burger ${isActive ? 'burgerActive' : ''}`;
  }, [isActive]);

  return (
    <div
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      className="el flex items-center"
    >
      <div className={getBurgerClasses} />
      <div className="label flex items-center">
        <motion.p
          className={copyClasses}
          variants={opacity}
          animate={isActive ? 'closed' : 'open'}
        >
          Menu
        </motion.p>
        <motion.p
          className={copyClasses}
          variants={opacity}
          animate={isActive ? 'open' : 'closed'}
        >
          Close
        </motion.p>
      </div>
    </div>
  );
};

MenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default React.memo(MenuButton);
