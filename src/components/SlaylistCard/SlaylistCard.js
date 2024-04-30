import { React, useState, useContext } from "react";
import "./SlaylistCard.css";
import { UserContext } from "../../contexts/UserContext";

const SlaylistCard = ({ item, onSelectedSlaylistCard, onNotLoggedIn }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { currentUser } = useContext(UserContext);

  function handleLike(e) {
    if (currentUser === "") {
      // Can view a slaylist but cannot Like if the user is not logged in
      e.stopPropagation(); // to prevent the modal from opening if you don't want it to
      onNotLoggedIn("SlaylistCard");
      return;
    }

    // When there is a backend, this could be an API call to update the likes for this Slaylist row in the database
    // For now, it's just a visual change
    // Currently it "communicates" with the SlaylistModal component to display updates to Likes but not the SlaylistModal will not reciprocate updates to the SlaylistCard component
    e.stopPropagation(); // to prevent the modal from opening if you don't want it to
    setIsLiked(!isLiked);
  }

  return (
    <div
      className="slaylist-card"
      onClick={() => onSelectedSlaylistCard(item, isLiked)}
    >
      <div className="slaylist-card__content">
        <div className="slaylist-card__flex-container">
          <div className="slaylist-card__title-tagline-likes-container">
            <div className="slaylist-card__likes-container">
              {/* ♡ */}
              <button
                className={`slaylist-card__like-button ${
                  isLiked ? "slaylist-card__like-button_active" : ""
                }`}
                type="button"
                onClick={handleLike}
              ></button>
              <p className="slaylist-card__likes">
                {isLiked ? item.likes + 1 : item.likes}
              </p>
            </div>
            <div className="slaylist-card__title-tagline-container">
              <h3 className="slaylist-card__title">{item.title}</h3>
              <p className="slaylist-card__tagline">{item.tagline}</p>
            </div>
          </div>
          <div className="slaylist-card__source-info-container">
            <p className="slaylist-card__date-created">{item.date_created}</p>
            <p className="slaylist-card__owner">{item.owner_id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SlaylistCard;
