import React, { createContext, useContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import ErrorPopup from '../components/ErrorPopUp';

export const GeneralErrorContext = createContext();

export const useError = () => useContext(GeneralErrorContext);

// GeneralErrorProvider component to provide error handling functionality to its children
// This will display ErrorPopup in the screen if there's an error
export const GeneralErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const showError = (message) => setError(message);
  const hideError = () => setError(null);

  // Memoize the context value to avoid unnecessary re-renders
  const contextValue = useMemo(
    () => ({ error, showError, hideError }),
    [error]
  );

  return (
    <GeneralErrorContext.Provider value={contextValue}>
      {children}
      {error && <ErrorPopup message={error} onClose={hideError} />}
    </GeneralErrorContext.Provider>
  );
};

GeneralErrorProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
