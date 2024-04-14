import "./Header.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">Slaylist</div>
      <Navigation />
    </header>
  );
};

export default Header;
