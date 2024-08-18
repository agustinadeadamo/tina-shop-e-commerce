import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { height } from '../animationVariants';
import links from './linksData';
import Nav from './Nav';

const MenuPanel = ({ onClickLink }) => {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className="overflow-hidden"
    >
      <div className="flex flex-col gap-[50px] md:flex-row md:justify-between mb-[80px] md:mb-0">
        <div className="flex flex-col justify-between">
          <Nav
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
            onclickLink={onClickLink}
          />
        </div>
      </div>
    </motion.div>
  );
};

MenuPanel.propTypes = {
  onClickLink: PropTypes.func.isRequired,
};

export default MenuPanel;
