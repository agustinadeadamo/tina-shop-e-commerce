import React from 'react';
import PropTypes from 'prop-types';
import { FaStar, FaRegStar } from 'react-icons/fa';

const RatingStars = ({ rate, size = '' }) => {
  const roundedRate = Math.round(rate);

  return (
    <div className="flex items-center mt-2 mb-2">
      {Array.from({ length: 5 }, (_, index) => {
        const Icon = index < roundedRate ? FaStar : FaRegStar;
        return <Icon key={index} className={`text-secondary ${size}`} />;
      })}
    </div>
  );
};

RatingStars.propTypes = {
  rate: PropTypes.number.isRequired,
  size: PropTypes.string,
};

export default React.memo(RatingStars);
