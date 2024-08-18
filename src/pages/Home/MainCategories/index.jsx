import React from 'react';
import MainCategoriesCard from './MainCategoriesCard';
import categoryData from './categoryData';

const MainCategories = () => {
  return (
    <div className="w-full p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
        {categoryData.map((card) => (
          <MainCategoriesCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default MainCategories;
