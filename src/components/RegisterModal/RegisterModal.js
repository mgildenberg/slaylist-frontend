import { React, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({
  handleCloseModal,
  onRegistration,
  isOpen,
  isLoading,
  onAltClick,
}) => {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
  };

  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
  };

  const [link, setUrl] = useState("");

  const handleUrlChange = (e) => {
    // console.log(e.target.value);
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // onRegistration({ name, weather: radio, imageUrl: link });
    onRegistration({ email, password, name, avatar: link });
  };

  const handleAltClick = (e) => {
    e.preventDefault();
    console.log("in handleAltClick");
    onAltClick("signin");
  };

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
      name="signup"
      onClose={handleCloseModal} //it has to be onClose because ModalWithForm has that as a param, handleCloseModal is coming from App.js
      onRegistration={onRegistration}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      // alternativeLink="/signin"
      handleAltClick={handleAltClick}
      alternativeText="or Log In"
    >
      <label>
        Email
        <input
          className="modal__input"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </label>
      <label>
        Password
        <input
          className="modal__input"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </label>
      <label>
        Username
        <input
          className="modal__input"
          type="text"
          name="username"
          minLength="1"
          maxLength="30"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
// export default withRouter(RegisterModal); // sprint 14 might need to swap to this???