import React from "react";
import "./SlaylistCard.css";
// import topSlaylists from "../../utils/constants";

const SlaylistCard = ({ item, onSelectedSlaylistCard }) => {
  // console.log(topSlaylists);

  return (
    <div className="slaylist-card" onClick={() => onSelectedSlaylistCard(item)}>
      <div className="slaylist-card__content">
        <div className="slaylist-card__flex-container">
          <div className="slaylist-card__title-tagline-likes-container">
            <p className="slaylist-card__likes">♡ {item.likes}</p>
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
