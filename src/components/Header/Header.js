import "./Header.css";
// import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import React from "react";

const Header = ({ onRegisterModal, onLoginModal, isLoggedIn }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <i>Slaylist.</i>
      </div>
      <Navigation
        onRegisterModal={onRegisterModal}
        onLoginModal={onLoginModal}
        isLoggedIn={isLoggedIn}
      />
    </header>
  );
};

export default Header;
