import React, { useState } from 'react';
import { Form } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { useModal } from '../../contexts/ModalContexts';
import { fetchCartItems } from '../../actions/cart';
import errorMesajes from '../../constants/errorMesajes';
import Modal from '../Modal';
import { EmailField, PasswordField } from '../Form';
import { PrimaryButton, SecondaryButton } from '../Buttons';
import { useAuth } from '../../contexts/AuthContext';
import { useError } from '../../contexts/GeneralErrorContext';

function LoginModal() {
  const { isLoginModalOpen, closeLoginModal, openSignupModal } = useModal();
  const { login } = useAuth();
  const [loginError, setLoginError] = useState(null);
  const dispatch = useDispatch();
  const { showError } = useError();

  const getCartItems = async () => {
    try {
      await dispatch(fetchCartItems()).unwrap();
    } catch (error) {
      showError(errorMesajes.FETCH_CART);
    }
  };

  const onSubmit = async values => {
    setLoginError(null);
    try {
      await login(values.email, values.password);
      getCartItems();
      closeLoginModal();
    } catch (error) {
      setLoginError(errorMesajes.LOGIN);
    }
  };

  const onClickSignup = () => {
    closeLoginModal();
    openSignupModal();
  };

  return (
    <Modal
      width="w-[780px]"
      isOpen={isLoginModalOpen}
      onClose={closeLoginModal}
    >
      <div className="bg-customGrey-light">
        <div className="w-full md:w-[400px] h-auto bg-white pt-10 pb-6 px-4 md:px-12">
          <h2 className="text-2xl text-primary text-center">Welcome back!</h2>
          <p className="text-center text-sm text-zinc-600 mb-10">
            Login to access your saved swag
          </p>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, submitting }) => (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <EmailField />
                </div>
                <div className="mb-6">
                  <PasswordField />
                </div>
                <div className="mt-14 mb-4 w-[140px] flex justify-center items-center mx-auto">
                  <PrimaryButton type="submit" disabled={submitting}>
                    Login
                  </PrimaryButton>
                </div>
                <div className="flex justify-between items-center mt-6 mb-4">
                  <span className="text-left text-sm">
                    New to Tina&apos;s shop?
                  </span>
                  <div className="w-[150px]">
                    <SecondaryButton
                      disabled={submitting}
                      onClick={onClickSignup}
                    >
                      Create account
                    </SecondaryButton>
                  </div>
                </div>
              </form>
            )}
          />
          {loginError && (
            <div className="mb-4 text-red-500" role="alert">
              {loginError}
            </div>
          )}
        </div>
      </div>
      <div />
    </Modal>
  );
}

export default LoginModal;
