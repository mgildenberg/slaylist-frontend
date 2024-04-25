import "./About.css";
import { Link } from "react-router-dom";
import React from "react";

const About = () => {
  return (
    <div className="about">
      <a className="about__link" href="https://github.com/mgildenberg/">
        Site made by Maddie Gildenberg
      </a>
    </div>
  );
};

export default About;
