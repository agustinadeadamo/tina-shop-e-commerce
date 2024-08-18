import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';

const FavoriteButton = ({ isFavorite, toggleFavorite }) => {
  const handleToggleFavorite = (e) => {
    e.stopPropagation();
    toggleFavorite();
  };

  return (
    <button
      type="button"
      aria-label="Add to favorites"
      onClick={handleToggleFavorite}
      className="absolute top-2 right-2 text-gray-500 hover:text-secondary transition-colors text-2xl"
    >
      {isFavorite ? (
        <FaHeart className="text-secondary" />
      ) : (
        <CiHeart className="text-gray-500" />
      )}
    </button>
  );
};

FavoriteButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

export default React.memo(FavoriteButton);
