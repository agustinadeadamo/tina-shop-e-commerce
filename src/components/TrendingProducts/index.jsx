import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';
import { useProductCardActions } from '../../hooks';

const TrendingProducts = ({ products }) => {
  const { handleAddSingleItemToCart, handleViewMore } = useProductCardActions();
  const productsExist = !products?.length;

  if (productsExist) return null;

  return (
    <div className="mt-20 mb-20 p-4">
      <h2 className="text-xl font-semibold mb-10 uppercase text-center">
        Trending Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleAddToCart={() => handleAddSingleItemToCart(product)}
            handleViewMore={() => handleViewMore(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

TrendingProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      imageUrl: PropTypes.string,
    })
  ).isRequired,
};

export default React.memo(TrendingProducts);
