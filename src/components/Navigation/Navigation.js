import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav">
      <button
        // this is a button because it leads to a modal
        className="nav__button"
        type="text"
        //   onClick={onCreateModal}
        // need to add if line to swap Login and Signup based on logged in state
      >
        Login/Signup
      </button>
      <Link
        // this is a link because it leads to a different page
        className="nav__link"
        to="/dashboard"
        //   onClick={onCreateModal}
        // need to add if line for this to be available only when logged in
      >
        (LI) My Slaylists
      </Link>
    </div>
  );
};

export default Navigation;
