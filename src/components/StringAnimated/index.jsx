import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import translate from './animationVariants';

/**
 * StringAnimated component that animates each character of a given word individually.
 *
 * This component takes a string (word) as a prop and splits it into individual characters.
 * Each character is then wrapped in a `motion.span` element from Framer Motion to apply
 * custom animations
 *
 * @param {string} word - The string to be animated, with each character animated individually.
 */
const StringAnimated = ({ word }) => {
  return (
    <>
      {word.split('').map((char, i) => (
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
};

StringAnimated.propTypes = {
  word: PropTypes.string.isRequired,
};

export default StringAnimated;
