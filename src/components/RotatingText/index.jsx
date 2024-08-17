import React, { useEffect, useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import opacity from './anim';

/**
 * RotatingText Component
 *
 * Displays a series of phrases one by one with a fading and sliding animation effect.
 *
 * @param {string[]} phrases - The list of phrases to display in rotation.
 * @param {function} onComplete - A callback function that gets called when all phrases have been displayed.
 */
const RotatingText = ({ phrases, onComplete }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  const activePhrase = useMemo(
    () => phrases[currentPhraseIndex],
    [currentPhraseIndex, phrases]
  );

  const isLastPhrase = useCallback(
    () => currentPhraseIndex === phrases.length - 1,
    [currentPhraseIndex, phrases.length]
  );

  const getDelayDuration = useCallback(
    () => (currentPhraseIndex === 0 ? 1000 : 150),
    [currentPhraseIndex]
  );

  useEffect(() => {
    if (isLastPhrase()) {
      onComplete();
      return;
    }

    const delayDuration = getDelayDuration();
    const timerId = setTimeout(() => {
      setCurrentPhraseIndex((prevIndex) => prevIndex + 1);
    }, delayDuration);

    return () => clearTimeout(timerId);
  }, [currentPhraseIndex, isLastPhrase, getDelayDuration, onComplete]);

  return (
    <motion.p
      className="font-montserrat uppercase text-center text-6xl"
      variants={opacity}
      initial="initial"
      animate="enter"
    >
      {activePhrase}
    </motion.p>
  );
};

RotatingText.propTypes = {
  phrases: PropTypes.arrayOf(PropTypes.string).isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default RotatingText;
