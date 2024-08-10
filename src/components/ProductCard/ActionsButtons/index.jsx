import React from 'react';
import PropTypes from 'prop-types';
import { FaShoppingCart, FaEye } from 'react-icons/fa';

function ActionButtons({ handleAddToCart, handleViewMore, id }) {
  const generalButtonClasses =
    'p-3 w-12 h-12 flex items-center justify-center  focus:outline-none';

  return (
    <div className="absolute inset-0 flex items-center justify-end opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 p-4">
      <div className="flex flex-col mt-4">
        {/* Add to cart button */}
        <button
          type="button"
          aria-label="Add to cart"
          onClick={handleAddToCart}
          className={`bg-primary text-white  ${generalButtonClasses}`}
        >
          <FaShoppingCart className="text-xl" />
        </button>
        {/* View more button */}
        <button
          type="button"
          onClick={() => handleViewMore(id)}
          className={`bg-customGrey text-primary ${generalButtonClasses}`}
          aria-label="View more details"
        >
          <FaEye className="text-xl" />
        </button>
      </div>
    </div>
  );
}

ActionButtons.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
  handleViewMore: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default React.memo(ActionButtons);
