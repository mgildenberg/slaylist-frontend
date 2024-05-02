import "./Footer.css";
import About from "../About/About";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <About />
        {/* <p className="neon-text">Example example</p> */}
      </div>
    </footer>
  );
};

export default Footer;
