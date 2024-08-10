import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';
import { getPathSegments, translateSegment } from '../../utils/urls';

const BreadcrumbItem = ({ segment, index, pathSegments }) => {
  const segmentName = translateSegment(segment);
  const pathTo = `/${pathSegments.slice(0, index + 1).join('/')}`;

  return (
    <span className="flex items-center font-bebas">
      {index > 0 && <span className="mx-2 text-gray-400">{'>'}</span>}
      <Link to={pathTo} className="text-gray-800 font-bold">
        {segmentName}
      </Link>
    </span>
  );
};

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const pathSegments = getPathSegments(pathname);

  return (
    <nav className="text-gray-600 text-xl pt-10 flex items-center space-x-2">
      {pathSegments.map((segment, index) => (
        <BreadcrumbItem
          key={segment}
          segment={segment}
          index={index}
          pathSegments={pathSegments}
        />
      ))}
    </nav>
  );
};

BreadcrumbItem.propTypes = {
  segment: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  pathSegments: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Breadcrumb;
