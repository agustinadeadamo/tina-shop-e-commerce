/**
 * Logs an error message to the console and rethrows the error.
 * This function is used to standardize error handling across API calls.
 *
 * @param {Error} error - The error object caught during an API call or other operation.
 * @param {string} [customMessage='API call failed:'] - A custom message to prepend to the error message (optional).
 * @throws Will rethrow the error after logging it.
 */
const handleError = (error, customMessage = 'API call failed:') => {
  console.error(`${customMessage} ${error.message}`);
  throw error;
};

export default handleError;
