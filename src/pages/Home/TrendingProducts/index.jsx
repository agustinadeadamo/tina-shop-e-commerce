import React from 'react';
import { useProducts } from '../../../hooks';
import TrendingProducts from '../../../components/TrendingProducts';

const TrendingProductsSection = () => {
  const { products } = useProducts(4);

  return <TrendingProducts products={products} />;
};

export default TrendingProductsSection;
