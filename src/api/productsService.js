import axiosInstance from './axioInstance';
import handleError from '../utils/handleError';

/**
 * Fetches a list of products from the API, limited by the specified number.
 * 
 * @param {number} [limit=20] - The maximum number of products to fetch.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of products.
 */
export const getAllProducts = async (limit = 20) => {
  try {
    const response = await axiosInstance.get(`/products?limit=${limit}`);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Fetches details of a single product by its ID from the API.
 * 
 * @param {number|string} productId - The ID of the product to fetch.
 * @returns {Promise<Object>} - A promise that resolves to the product details.
 */
export const getProductById = async productId => {
  try {
    const response = await axiosInstance.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Fetches a list of products by category from the API.
 * 
 * @param {string} category - The category of products to fetch.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of products.
 */
export const getProductsByCategory = async category => {
  try {
    const response = await axiosInstance.get(`/products/category/${category}`);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Searches for products based on a query string.
 * 
 * @param {string} query - The search query to use for finding products.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of products matching the search query.
 */
// TODO implement search
export const searchProducts = async query => {
  try {
    const response = await axiosInstance.get(
      `/products?title=${encodeURIComponent(query)}`,
    );
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};
