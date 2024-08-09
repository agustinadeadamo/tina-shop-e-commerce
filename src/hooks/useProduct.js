import { useState, useEffect } from 'react';
import { getProductById } from '../api/productsService';
import errorMesajes from '../constants/errorMesajes';

/**
 * Custom hook that fetches product details based on the provided productId.
 * Manages loading state, error handling, and stores the fetched product data.
 *
 * @param {string} productId - The ID of the product to fetch.
 * @returns {Object} - Returns an object containing the product data, error state, and loading state.
 */
const useProduct = productId => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const productData = await getProductById(productId);
        setProduct(productData);
      } catch {
        setError(errorMesajes.LOAD_PRODUCTS);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);

  return { product, error, loading };
};

export default useProduct;
