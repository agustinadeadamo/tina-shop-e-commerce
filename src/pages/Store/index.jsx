import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import ErrorMessage from '../../components/ErrorMessage';
import { useProducts } from '../../hooks';
import errorMessages from '../../constants/errorMesajes';
import ProductsList from './ProductsList';
import FilterBar from './FilterBar';
import CATEGORY_MAP from '../../constants/categories';
import Banner from './Banner';

const Store = () => {
  const { category } = useParams();
  // Translates a URL into a user-friendly name
  const categoryKey = CATEGORY_MAP[category] || '';
  const { products, error, loading } = useProducts(20, categoryKey);

  return (
    <>
      <Banner />
      <FilterBar />
      {loading && <Loader />}
      {error && <ErrorMessage message={errorMessages.LOAD_PRODUCTS} />}
      {!loading && !error && <ProductsList productsToShow={products} />}
    </>
  );
};

export default Store;
