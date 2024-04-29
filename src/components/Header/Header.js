import "./Header.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { React, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const Header = ({
  onRegisterModal,
  onLoginModal,
  onClickLogout,
  isLoggedIn,
}) => {
  return (
    <header className="header">
      <Link className="header__logo" to="/">
        <i>Slaylist.</i>
      </Link>
      <Navigation
        onRegisterModal={onRegisterModal}
        onLoginModal={onLoginModal}
        onClickLogout={onClickLogout}
        isLoggedIn={isLoggedIn}
      />
    </header>
  );
};

export default Header;
