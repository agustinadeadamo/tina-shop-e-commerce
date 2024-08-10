import React from 'react';

const CartBanner = () => {
  return (
    <div className="bg-customGrey-light px-4 py-2 text-xs">
      <p>
        <span className="text-secondary font-bold block">
          FREE STANDARD DELIVERY
        </span>
        <span className="text-black block">
          You&apos;ve got free standard delivery to your home
        </span>
      </p>
    </div>
  );
};

export default CartBanner;
