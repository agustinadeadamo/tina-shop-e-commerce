import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase-config';

const PrivateRoute = () => {
  const [user] = useAuthState(auth);

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
