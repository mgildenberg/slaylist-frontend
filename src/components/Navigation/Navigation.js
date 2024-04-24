import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = ({ onRegisterModal, onLoginModal, isLoggedIn }) => {
  // console.log(onRegisterModal);
  return (
    <div className="nav">
      {isLoggedIn ? null : (
        <button
          // this is a button because it leads to a modal
          className="nav__button"
          type="text"
          onClick={onRegisterModal}
        >
          Register
        </button>
      )}
      {isLoggedIn ? null : (
        <button
          // this is a button because it leads to a modal
          className="nav__button"
          type="text"
          onClick={onLoginModal}
        >
          Login
        </button>
      )}
      {isLoggedIn ? (
        <Link
          // this is a link because it leads to a different page
          className="nav__link"
          to="/dashboard"
          //   onClick={onCreateModal}
        >
          My Slaylists
        </Link>
      ) : null}
    </div>
  );
};

export default Navigation;
