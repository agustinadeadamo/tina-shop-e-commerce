import React from 'react';
import PropTypes from 'prop-types';
import RatingStars from '../RatingStars';

function ReviewsPoints({ rate, count }) {
  const roundedRate = Math.round(rate);

  return (
    <div className="mt-4 border-b border-gray-200 pt-4 pb-10 text-center">
      <h2 className="text-7xl font-semibold">{rate}</h2>
      <div className="flex justify-center mt-2">
        <RatingStars rate={roundedRate} size="text-3xl mx-1" />
      </div>
      <p className="text-xs text-gray-600">{count} reviews</p>
    </div>
  );
}

ReviewsPoints.propTypes = {
  rate: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default React.memo(ReviewsPoints);
