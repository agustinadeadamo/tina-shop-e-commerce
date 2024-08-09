import React from "react";
import { PrimaryButton } from "../../../Buttons";
import { useModal } from "../../../../contexts/ModalContexts";

function LoginButton() {
  const { openLoginModal } = useModal();

  return <PrimaryButton onClick={openLoginModal}> Login </PrimaryButton>;
}

export default LoginButton;
