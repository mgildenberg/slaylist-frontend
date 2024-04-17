import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = ({ onRegisterModal, onLoginModal, isLoggedIn }) => {
  console.log(onRegisterModal);
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
      {
        //temporary ! for testing
        !isLoggedIn ? (
          <Link
            // this is a link because it leads to a different page
            className="nav__link"
            to="/dashboard"
            //   onClick={onCreateModal}
            // need to add if line for this to be available only when logged in
          >
            (Temp) My Slaylists
          </Link>
        ) : null
      }
    </div>
  );
};

export default Navigation;
