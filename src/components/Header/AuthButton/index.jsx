import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth } from '../../../contexts/AuthContext';

function AuthButton() {
  const { user } = useAuth();

  return user ? <LogoutButton /> : <LoginButton />;
}

export default AuthButton;
