import { useState, useEffect } from 'react';
import { getAllProducts, getProductsByCategory } from '../api/productsService';
import errorMesajes from '../constants/errorMesajes';

/**
 * Custom hook that fetches a list of products, either all products or products filtered by category.
 * Handles loading state, error handling, and allows limiting the number of products retrieved.
 * @param {number} limit - The maximum number of products to fetch (default is 4).
 * @param {string|null} category - The category to filter products by; if null, fetches all products.
 * @returns {Object} - Returns an object containing the list of products, any error encountered, and the loading state.
 */
const useProducts = (limit = 4, category = null) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAllProductsData = async () => {
      setLoading(true);
      setError(null);
      try {
        let productsData;
        if (category) {
          productsData = await getProductsByCategory(category);
        } else {
          productsData = await getAllProducts(limit);
        }
        setProducts(productsData);
      } catch {
        setError(errorMesajes.FETCH_PRODUCTS);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProductsData();
  }, [limit, category]);

  return { products, error, loading };
};

export default useProducts;
