import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductImage from './ProductImage';
import { useLazyLoad } from '../../hooks';
import FavoriteButton from './FavoriteButton';
import AddToCartButton from './AddToCartButton';

const ProductCard = ({ product, handleAddToCart, handleViewMore }) => {
  const { title, image, price, id } = product;
  const [ref, isVisible] = useLazyLoad({ threshold: 0.1 });
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    handleViewMore(id);
  };

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  if (!isVisible) {
    return <div ref={ref} className="h-[400px] bg-gray-200" />;
  }

  return (
    <div
      onClick={handleClick}
      ref={ref}
      onKeyPress={handleClick}
      role="button"
      tabIndex={0}
      className="relative bg-white overflow-hidden group border border-gray-200 h-[500px] flex items-center justify-center p-6"
    >
      <div className="relative w-[80%] h-full flex items-center justify-center overflow-hidden">
        <div className="w-full h-[70%] flex items-center justify-center transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-20%]">
          <ProductImage
            image={image}
            title={title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <FavoriteButton isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
      <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
        <div className="text-center">
          <h3 className="text-base uppercase text-xs font-semibold">{title}</h3>
          <p className="text-gray-900 mt-2 text-lg font-light mt-8">€{price}</p>
          <AddToCartButton handleAddToCart={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};

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
