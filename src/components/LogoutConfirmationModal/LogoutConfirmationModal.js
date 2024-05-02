import { React } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LogoutConfirmationModal = ({
  handleCloseModal,
  onLogoutConfirmation,
  isOpen,
  isLoading,
  onAltClick,
}) => {
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
