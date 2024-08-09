import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Form } from 'react-final-form';
import { auth } from '../../../firebase-config';
import { useModal } from '../../contexts/ModalContexts';
import errorMesajes from '../../constants/errorMesajes';
import { SecondaryButton, PrimaryButton } from '../Buttons';
import Modal from '../Modal';
import { EmailField, PasswordField } from '../Form';

function SignupModal() {
  const { isSignupModalOpen, closeSignupModal, openLoginModal } = useModal();
  const [signupError, setSignupError] = useState(null);

  const onSubmit = async values => {
    if (values.password !== values.confirmPassword) {
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      closeSignupModal();
    } catch {
      setSignupError(errorMesajes.SIGN_UP);
    }
  };

  const validatePasswordsMatch = values => {
    const errors = {};
    const { password, confirmPassword } = values;
    if (!confirmPassword) {
      errors.confirmPassword = 'Required';
    } else if (confirmPassword !== password) {
      errors.confirmPassword = 'Passwords must match';
    }
    return errors;
  };

  const onClickLogin = () => {
    closeSignupModal();
    openLoginModal();
  };

  return (
    <Modal isOpen={isSignupModalOpen} onClose={closeSignupModal}>
      <div className="bg-customGrey-light">
        <div className="w-full md:w-[400px] h-auto bg-white pt-10 pb-6 px-4 md:px-12">
          <h2 className="text-2xl text-primary text-center">
            Let&apos;s be friends...
          </h2>
          <p className="text-center text-sm text-zinc-600 mb-10">
            Sign up to purchase your new fav item today
          </p>
          <Form
            onSubmit={onSubmit}
            validate={validatePasswordsMatch}
            render={({ handleSubmit, submitting }) => (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <EmailField name="email" />
                </div>
                <div className="mb-6">
                  <PasswordField name="password" />
                </div>
                <div className="mb-6">
                  <PasswordField
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    label="Confirm Password"
                  />
                </div>
                <div className="mt-14 mb-4 w-[140px] flex justify-center items-center mx-auto">
                  <PrimaryButton type="submit" disabled={submitting}>
                    Sign up
                  </PrimaryButton>
                </div>
                <div className="flex justify-between items-center mt-6 mb-4">
                  <span className="text-left text-sm">Already a friend?</span>
                  <div className="w-[150px]">
                    <SecondaryButton
                      disabled={submitting}
                      onClick={onClickLogin}
                    >
                      Login
                    </SecondaryButton>
                  </div>
                </div>
              </form>
            )}
          />
          {signupError && (
            <div className="mb-4 text-red-500" role="alert">
              {signupError}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default SignupModal;
