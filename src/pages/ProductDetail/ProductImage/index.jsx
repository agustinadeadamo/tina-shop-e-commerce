import React from "react";
import PropTypes from "prop-types";

function ProductImage({ image, title }) {
  return (
    <div className="relative lg:col-span-1">
      <div className="sticky top-4">
        <img
          src={image}
          alt={title}
          className="object-contain w-full h-full max-h-96 sm:max-h-80 md:max-h-96 lg:max-h-none transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
}

ProductImage.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default React.memo(ProductImage);
