import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import AccordionItem from './AccordionItem';

const Accordion = ({ accordionItems }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = useCallback(
    (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    },
    [activeIndex]
  );

  return (
    <div>
      {accordionItems.map((section, index) => (
        <AccordionItem
          key={section.id}
          section={section}
          index={index}
          isOpen={activeIndex === index}
          onClick={toggleAccordion}
        />
      ))}
    </div>
  );
};

Accordion.propTypes = {
  accordionItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Accordion;
