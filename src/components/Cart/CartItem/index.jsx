import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';
import QuantitySelector from '../../QuantitySelector';

function CartItem({
  item,
  handleDecreaseQuantity,
  handleRemoveItem,
  handleIncreaseQuantity,
  disabledButtons,
}) {
  const totalItemPrice = useMemo(
    () => item.price * item.quantity,
    [item.price, item.quantity],
  );

  const onRemoveItem = () => {
    handleRemoveItem(item);
  };

  const onIncreaseQuantity = () => {
    handleIncreaseQuantity(item);
  };

  const onDecreaseQuantity = () => {
    handleDecreaseQuantity(item);
  };

  return (
    <li
      key={item.id}
      className="mx-8 flex border-b border-customGrey-light py-5"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-20 object-contain mr-8"
      />
      <div className="flex-1">
        <div className="flex justify-between items-start mb-1">
          {/* Item description */}
          <div>
            <h3 className="font-semibold text-xs mr-4">{item.title}</h3>
            <span className="text-gray-600 text-xs">Qty: {item.quantity}</span>
          </div>
          {/* Remove button */}
          <button
            type="button"
            onClick={onRemoveItem}
            className="bg-customGrey-light hover:bg-gray-200 p-2 rounded-full w-7 h-7 flex items-center justify-center"
            aria-label={`Remove ${item.title} from cart`}
          >
            <FaTrashAlt className="text-gray-600" />
          </button>
        </div>
        {/* Size */}
        <div className="flex items-center mb-6 text-gray-600 text-xs">
          <span>{item.size}</span>
        </div>
        <div className="flex justify-between items-center">
          {/* Price */}
          <p className="font-bold text-xs">${totalItemPrice.toFixed(2)}</p>
          {/* Quantity modifier */}
          <div className="flex items-center">
            <QuantitySelector
              quantity={item.quantity}
              disabled={disabledButtons}
              increaseQuantity={onIncreaseQuantity}
              decreaseQuantity={onDecreaseQuantity}
            />
          </div>
        </div>
      </div>
    </li>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    size: PropTypes.string,
  }).isRequired,
  handleDecreaseQuantity: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleIncreaseQuantity: PropTypes.func.isRequired,
  disabledButtons: PropTypes.bool,
};

export default React.memo(CartItem);
