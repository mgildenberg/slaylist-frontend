import { React, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LogoutConfirmationModal = ({
  handleCloseModal,
  onLogoutConfirmation,
  isOpen,
  isLoading,
  onAltClick,
}) => {
  //   const [email, setEmail] = useState("");

  //   const handleEmailChange = (e) => {
  //     // console.log(e.target.value);
  //     setEmail(e.target.value);
  //   };

  //   const [password, setPassword] = useState("");

  //   const handlePasswordChange = (e) => {
  //     // console.log(e.target.value);
  //     setPassword(e.target.value);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("LogoutConfirmation form entries", { email, password });
    onLogoutConfirmation();
  };

  const handleAltClick = (e) => {
    e.preventDefault();
    console.log("in handleAltClick");
    onAltClick("");
  };

  return (
    <ModalWithForm
      title="Log Out"
      buttonText="Log Out"
      name="logout"
      onClose={handleCloseModal} //it has to be onClose because ModalWithForm has that as a param, handleCloseModal is coming from App.js
      onLogoutConfirmation={onLogoutConfirmation}
      isOpen={isOpen}
      onSubmit={onLogoutConfirmation}
      isLoading={isLoading}
      handleAltClick={handleAltClick}
      // alternativeLink="/signup"
      alternativeText="or Cancel"
    >
      Are you sure you want to log out?
    </ModalWithForm>
  );
};

export default LogoutConfirmationModal;
// export default withRouter(LogoutConfirmationModal); // sprint 14 might need to swap to this???
