import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import ResponsiveContainer from '../ResponsiveMainContainer';
import ProductCard from '../ProductCard';
import { useProductCardActions } from '../../hooks';
import trendingProductsAnimation from './animations';

function TrendingProducts({ products }) {
  const containerRef = useRef(null);
  const { handleAddSingleItemToCart, handleViewMore } = useProductCardActions();
  const productsExist = !products?.length;

  useEffect(() => {
    if (containerRef.current) {
      trendingProductsAnimation(containerRef);
    }
  }, [products]);

  if (productsExist) return null;

  return (
    <ResponsiveContainer>
      <div className="mt-20 mb-20">
        <h2 className="text-3xl font-semibold mb-10">Trending Products</h2>
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
          ref={containerRef}
        >
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
    </ResponsiveContainer>
  );
}

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
