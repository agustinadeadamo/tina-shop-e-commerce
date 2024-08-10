import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import ErrorMessage from '../../components/ErrorMessage';
import ResponsiveContainer from '../../components/ResponsiveMainContainer';
import { useProducts } from '../../hooks';
import errorMessages from '../../constants/errorMesajes';
import ProductsList from './ProductsList';
import CategoryNav from '../../components/CategoryNav';
import Breadcrumb from '../../components/Breadcrumb';
import CATEGORY_MAP from '../../constants/categories';

function Store() {
  const { category } = useParams();
  // Translates a URL into a user-friendly name
  const categoryKey = CATEGORY_MAP[category] || '';
  const { products, error, loading } = useProducts(20, categoryKey);

  return (
    <>
      <CategoryNav />
      <ResponsiveContainer>
        <Breadcrumb />
        {loading && <Loader />}
        {error && <ErrorMessage message={errorMessages.LOAD_PRODUCTS} />}
        {!loading && !error && <ProductsList productsToShow={products} />}
      </ResponsiveContainer>
    </>
  );
}

export default React.memo(Store);
