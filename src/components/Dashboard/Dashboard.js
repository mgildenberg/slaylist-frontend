import React from "react";
import "./Dashboard.css";
import { topSlaylists } from "../../utils/constants";
import SlaylistCard from "../SlaylistCard/SlaylistCard";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Dashboard = ({ onSelectedSlaylistCard }) => {
  const me = "ampersand";
  const mySlaylists = topSlaylists.filter((item) => item.owner_id === me);
  const history = useHistory();

  return (
    <div className="dashboard">
      <div className="dashboard__content">
        <h1 class="dashboard__tagline">
          View your Slaylists or make a new one ✨
        </h1>
      </div>
      <div className="slaylist-container">
        {/* <div className="new-slaylist-button"> */}
        <button
          className="slaylist-card new-slaylist-btn"
          type="button"
          onClick={() => history.push("/new-slaylist")}
        >
          + New Slaylist
        </button>

        {mySlaylists.map((item) => {
          // create a new SlaylistCard component for each item in the topSlaylists array
          return (
            <SlaylistCard
              item={item}
              onSelectedSlaylistCard={onSelectedSlaylistCard}
              key={item._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
