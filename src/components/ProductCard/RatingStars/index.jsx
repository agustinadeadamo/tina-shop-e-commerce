// RatingStars.js
import React from "react";
import PropTypes from "prop-types";
import { FaStar, FaRegStar } from "react-icons/fa";

const RatingStars = ({ rate }) => {
  const roundedRate = Math.round(rate);

  return (
    <div className="flex items-center mt-2">
      {Array.from({ length: 5 }, (_, index) =>
        index < roundedRate ? (
          <FaStar key={index} className="text-yellow-500" />
        ) : (
          <FaRegStar key={index} className="text-yellow-500" />
        )
      )}
    </div>
  );
};

RatingStars.propTypes = {
  rate: PropTypes.number.isRequired,
};

export default React.memo(RatingStars);
