import React from 'react';
import PropTypes from 'prop-types';
import { useProductCardActions } from '../../../hooks';
import ProductCard from '../../../components/ProductCard';

/**
 * Component that displays a list of products.
 * @param {Array} productsToShow - List of products to display.
 */
function ProductsList({ productsToShow }) {
  const { handleAddSingleItemToCart, handleViewMore } = useProductCardActions();
  if (!productsToShow) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 py-12">
      {productsToShow.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          handleViewMore={() => handleViewMore(product.id)}
          handleAddToCart={() => handleAddSingleItemToCart(product)}
        />
      ))}
    </div>
  );
}

ProductsList.propTypes = {
  productsToShow: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      imageUrl: PropTypes.string,
    })
  ).isRequired,
};

export default ProductsList;
