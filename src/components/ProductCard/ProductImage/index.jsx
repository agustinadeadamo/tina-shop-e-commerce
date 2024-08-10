import React from 'react';
import PropTypes from 'prop-types';

const ProductImage = ({ image, title }) => {
  return (
    <img
      src={image}
      alt={title}
      className="absolute top-0 left-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
    />
  );
};

ProductImage.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default React.memo(ProductImage);
