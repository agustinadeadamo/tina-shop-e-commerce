import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Icon from '../Icon';
import contentVariants from './anim';

const AccordionItem = ({ section, index, isOpen, onClick }) => {
  return (
    <div className="mb-4">
      <button
        type="button"
        onClick={() => onClick(index)}
        className="w-full flex justify-between items-center bg-transparent pb-4 pt-4 rounded-none focus:outline-none border-b border-gray-200"
        aria-expanded={isOpen}
        aria-controls={`section-content-${index}`}
      >
        <span>{section.title}</span>
        <Icon isOpen={isOpen} />
      </button>
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={contentVariants}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="overflow-hidden"
        id={`section-content-${index}`}
      >
        <div className="p-4 border-t border-gray-200">
          <p>{section.content}</p>
        </div>
      </motion.div>
    </div>
  );
};

AccordionItem.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired, // Allows string or React nodes
  }).isRequired,
  index: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default React.memo(AccordionItem);
