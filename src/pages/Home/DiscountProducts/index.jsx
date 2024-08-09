import React from 'react';
import ResponsiveContainer from '../../../components/ResponsiveMainContainer';
import DiscountProductCard from './DiscountProductCard';
import { cardsData, animationsData } from './cardData';

function DiscountProducts() {
  return (
    <ResponsiveContainer>
      <div className="w-full pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cardsData.map((card, index) => (
            <DiscountProductCard
              key={card.id}
              {...card}
              animation={animationsData[index % animationsData.length]}
            />
          ))}
        </div>
      </div>
    </ResponsiveContainer>
  );
}

export default DiscountProducts;
