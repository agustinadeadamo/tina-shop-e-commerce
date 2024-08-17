import React from 'react';
import PropTypes from 'prop-types';

const FooterSection = ({ title, items }) => (
  <div>
    <h3 className="font-semibold text-gray-800 mb-4 text-sm">{title}</h3>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.label}>
          <a href={item.href} className="hover:underline text-xs">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

FooterSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default React.memo(FooterSection);
