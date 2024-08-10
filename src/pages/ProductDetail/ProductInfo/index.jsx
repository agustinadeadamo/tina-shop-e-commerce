import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryButton } from '../../../components/Buttons';
import QuantitySelector from '../../../components/QuantitySelector';
import Accordion from '../../../components/Accordion';
import ReviewsPoints from '../../../components/ReviewsPoints';
import ColorSection from '../ColorSection';
import productDetailData from './productDetailData';

const ProductInfo = ({
  product,
  quantity,
  increaseQuantity,
  decreaseQuantity,
  handleAddToCart,
  disabledButtons = false,
}) => {
  return (
    <div className="lg:col-span-1 overflow-y-auto max-h-full">
      {/* Product Title */}
      <h1 className="text-2xl lg:text-3xl font-bold mb-4">{product.title}</h1>
      {/* Product Price */}
      <p className="text-gray-700 text-lg lg:text-2xl mb-4">${product.price}</p>
      {/* Product Description */}
      <p className="text-gray-700 mb-4">{product.description}</p>
      <ColorSection />
      <div className="mb-8 flex items-center space-x-2 border-b pb-8 border-gray-200 gap-8">
        <QuantitySelector
          quantity={quantity}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          disabled={disabledButtons}
        />
        <PrimaryButton disabled={disabledButtons} onClick={handleAddToCart}>
          Add to Cart
        </PrimaryButton>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Product Details</h3>
        <Accordion accordionItems={productDetailData} />
      </div>
      <ReviewsPoints {...product.rating} />
    </div>
  );
};

ProductInfo.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.object.isRequired,
  }).isRequired,
  quantity: PropTypes.number.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  disabledButtons: PropTypes.bool,
};

export default React.memo(ProductInfo);
