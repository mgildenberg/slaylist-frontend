import "./Header.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      Slaylist
      <Navigation />
    </header>
  );
};

export default Header;
