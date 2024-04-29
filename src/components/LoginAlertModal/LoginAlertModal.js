import { React } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginAlertModal.css";
// import styles from "./LoginAlertModal.module.css";

const LoginAlertModal = ({
  handleCloseModal,
  onLoginAlert,
  isOpen,
  isLoading,
  onAltClick,
  likeButtonOrigin,
}) => {
  const handleCloseBasedOnOrigin = () => {
    if (likeButtonOrigin == "SlaylistModal") {
      // if you close the Login Alert Modal from the SlaylistModal, it will take you back to the Slaylist Modal for viewing
      onAltClick("slaylist");
    } else {
      // if the prompt is not coming from the SlaylistModal, it will close the Login Alert Modal
      // currently the only alternative source is SlaylistCard
      handleCloseModal();
    }
  };

  const handleAltClick = (e) => {
    console.log(e);
    e.preventDefault();
    // console.log("in LoginAlertModal handleAltClick");
    onAltClick("register");
  };

  return (
    <ModalWithForm
      title="Login to Like Slaylists"
      buttonText="Login"
      name="Login"
      //it has to be onClose because ModalWithForm has that as a param, handleCloseModal is coming from App.js

      onClose={handleCloseBasedOnOrigin}
      onLoginAlert={onLoginAlert}
      isOpen={isOpen}
      onSubmit={onLoginAlert}
      isLoading={isLoading}
      handleAltClick={handleAltClick}
      // alternativeLink="/signup"
      alternativeText="Register"
      // {styles.modal__alternative_button}
      altButtonStyle="login-alert-modal__alternative-button"
    >
      Please login or register to Like a Slaylist
    </ModalWithForm>
  );
};

export default LoginAlertModal;
// export default withRouter(LoginAlertModal); // sprint 14 might need to swap to this???
