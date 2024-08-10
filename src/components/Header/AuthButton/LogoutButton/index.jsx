import React from 'react';
import { signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { SecondaryButton } from '../../../Buttons';
import { auth } from '../../../../../firebase-config';
import { clearCart } from '../../../../actions/cart';
import { useError } from '../../../../contexts/GeneralErrorContext';

function LogoutButton() {
  const dispatch = useDispatch();
  const { showError } = useError();

  const logout = async () => {
    signOut(auth)
      .then(() => {
        dispatch(clearCart());
      })
      .catch((error) => {
        showError(`Error signing out: ${error.message}`);
      });
  };

  return <SecondaryButton onClick={logout}>Logout</SecondaryButton>;
}

export default LogoutButton;
