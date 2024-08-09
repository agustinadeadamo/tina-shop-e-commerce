import axiosInstance from './axioInstance';
import handleError from '../utils/handleError';

export const getAllProducts = async (limit = 20) => {
  try {
    const response = await axiosInstance.get(`/products?limit=${limit}`);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const getProductById = async productId => {
  try {
    const response = await axiosInstance.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const getProductsByCategory = async category => {
  try {
    const response = await axiosInstance.get(`/products/category/${category}`);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

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
