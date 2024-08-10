import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';

export const ModalContext = createContext();

// ModalContext is created to manage the state of login and signup modals across the application.
// This context provides functions to open and close the modals and tracks whether each modal is currently open or closed.
export function ModalProvider({ children }) {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  const openLoginModal = useCallback(() => setLoginModalOpen(true), []);
  const closeLoginModal = useCallback(() => setLoginModalOpen(false), []);
  const openSignupModal = useCallback(() => setSignupModalOpen(true), []);
  const closeSignupModal = useCallback(() => setSignupModalOpen(false), []);

  // Memoize the context value to avoid unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      isLoginModalOpen,
      isSignupModalOpen,
      openLoginModal,
      closeLoginModal,
      openSignupModal,
      closeSignupModal,
    }),
    [
      isLoginModalOpen,
      isSignupModalOpen,
      openLoginModal,
      closeLoginModal,
      openSignupModal,
      closeSignupModal,
    ]
  );

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
}

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useModal = () => useContext(ModalContext);
