import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import animateAccordion from "../animations";
import "./style.scss";

function AccordionItem({ section, index, isOpen, onClick }) {
  const itemRef = useRef(null);

  useEffect(() => {
    if (itemRef.current) {
      animateAccordion(itemRef.current, isOpen);
    }
  }, [isOpen]);

  return (
    <div className="mb-4">
      <button
        type="button"
        onClick={() => onClick(index)}
        className="w-full flex justify-between items-center bg-transparent pb-4 pt-4 rounded-none focus:outline-none border-b border-gray-200"
      >
        <span>{section.title}</span>
        <Icon isOpen={isOpen} />
      </button>
      <div
        ref={itemRef}
        className={`overflow-hidden transition-height duration-300 ${
          isOpen ? "h-auto" : "h-0"
        }`}
      >
        <div className="p-4 border-t border-gray-200">
          <p>{section.content}</p>
        </div>
      </div>
    </div>
  );
}

AccordionItem.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default React.memo(AccordionItem);
