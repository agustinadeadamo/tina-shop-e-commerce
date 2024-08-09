import React from "react";
import PropTypes from "prop-types";
import RatingStars from "../RatingStars";
import ActionsButtons from "./ActionsButtons";
import ProductImage from "./ProductImage";
import { useLazyLoad } from "../../hooks";

/**
 * Component that displays product information.
 * @param {Object} product - Product data.
 * @param {Function} handleAddToCart - Function to handle adding the product to the cart.
 * @param {Function} handleViewMore - Function to handle viewing more details of the product.
 */
function ProductCard({ product, handleAddToCart, handleViewMore }) {
  const { title, image, price, rating, id } = product;
  const [ref, isVisible] = useLazyLoad({ threshold: 0.1 });

  if (!isVisible) {
    return <div ref={ref} className="h-[300px] bg-gray-200" />; // Placeholder
  }

  return (
    <div ref={ref} className="relative bg-white overflow-hidden group">
      <div className="relative w-full pb-24 pt-24">
        <ProductImage image={image} title={title} />
        <ActionsButtons
          id={id}
          handleAddToCart={handleAddToCart}
          handleViewMore={handleViewMore}
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold">{title}</h3>
        <RatingStars rate={rating.rate} />
        <p className="text-gray-900 font-bold mt-2">${price}</p>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  handleViewMore: PropTypes.func.isRequired,
};

export default React.memo(ProductCard);
