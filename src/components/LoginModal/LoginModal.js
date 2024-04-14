import { React, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({
  handleCloseModal,
  onLogin,
  isOpen,
  isLoading,
  onAltClick,
}) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("login form entries", { email, password });
    onLogin({ email, password });
  };

  const handleAltClick = (e) => {
    e.preventDefault();
    console.log("in handleAltClick");
    onAltClick("register");
  };

  return (
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      name="signin"
      onClose={handleCloseModal} //it has to be onClose because ModalWithForm has that as a param, handleCloseModal is coming from App.js
      onLogin={onLogin}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      handleAltClick={handleAltClick}
      // alternativeLink="/signup"
      alternativeText="or Sign Up"
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
    </ModalWithForm>
  );
};

export default LoginModal;
// export default withRouter(LoginModal); // sprint 14 might need to swap to this???
