import React from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

function ReviewCard({ review }) {
  return (
    <div className="bg-white p-6 shadow-lg">
      {/* Rating stars */}
      <div className="flex justify-center mb-4">
        {Array.from({ length: review.rating }, (_, i) => (
          <FaStar key={`star-${i}`} className="text-yellow-500" />
        ))}
      </div>
      {/* Reviewer's name */}
      <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
      {/* Review comment */}
      <p className="text-gray-600">{review.comment}</p>
    </div>
  );
}

ReviewCard.propTypes = {
  review: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(ReviewCard);
