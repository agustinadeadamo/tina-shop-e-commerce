import axios from "axios";

// Base URL for the Fakestore API
const apiBaseUrl = "https://fakestoreapi.com";

const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Interceptor to handle global Axios errors
axiosInstance.interceptors.response.use(
  (response) => {
    // Process the response before it is handled in the component
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
