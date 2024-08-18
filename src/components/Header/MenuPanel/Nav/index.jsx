import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import StringAnimated from '../../../StringAnimated';
import { blur } from '../../animationVariants';

const Nav = ({ links, selectedLink, setSelectedLink, onclickLink }) => {
  return (
    <nav className="body flex flex-wrap mt-10 md:mt-20 md:max-w-[1200px]">
      {links.map((link, index) => {
        const { title, href } = link;
        return (
          <Link
            key={href}
            to={href}
            onClick={onclickLink}
            className="text-black no-underline uppercase"
          >
            <motion.p
              className="m-0 flex overflow-visible text-2xl pr-7 pt-2.5 font-light md:text-[5vw] md:pr-[2vw] leading-tight"
              onMouseOver={() => setSelectedLink({ isActive: true, index })}
              onMouseLeave={() => setSelectedLink({ isActive: false, index })}
              variants={blur}
              animate={
                selectedLink.isActive && selectedLink.index !== index
                  ? 'open'
                  : 'closed'
              }
            >
              <StringAnimated word={title} />
            </motion.p>
          </Link>
        );
      })}
    </nav>
  );
};

Nav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedLink: PropTypes.shape({
    isActive: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
  }).isRequired,
  setSelectedLink: PropTypes.func.isRequired,
  onclickLink: PropTypes.func.isRequired,
};

export default Nav;
