import React, { createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase-config";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// AuthProvider component to manage authentication state and provide it to children components
export function AuthProvider({ children }) {
  const [user, loading, error] = useAuthState(auth);

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await signOut(auth);
  };

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      user,
      loading,
      error,
      login,
      logout,
    }),
    [user, loading, error],
  );

  // Provide the authentication context to children components
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
