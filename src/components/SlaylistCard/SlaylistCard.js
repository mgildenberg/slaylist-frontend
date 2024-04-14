import React from "react";
import "./SlaylistCard.css";
import topSlaylists from "../../utils/constants";

const SlaylistCard = ({ item }) => {
  console.log(topSlaylists);
  return (
    <div className="slaylist-card">
      <h3 className="slaylist-card__title">{item.title}</h3>
      <h4 className="slaylist-card__tagline">{item.tagline}</h4>
      <p className="slaylist-card__likes">{item.likes} likes</p>
    </div>
  );
};

export default SlaylistCard;
