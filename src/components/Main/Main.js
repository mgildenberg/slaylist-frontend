import React from "react";
import "./Main.css";
import { topSlaylists } from "../../utils/constants";
import SlaylistCard from "../SlaylistCard/SlaylistCard";

const Main = ({ onSelectedSlaylistCard }) => {
  // console.log(onSelectedSlaylistCard);
  // console.log(topSlaylists);
  const sortedSlaylists = topSlaylists.sort((a, b) => b.likes - a.likes);

  return (
    <main className="main">
      <div className="main__content">
        <h1 className="main__tagline">
          Slaylist - Tidy topic list for social media accounts and posts
        </h1>
      </div>
      <div className="slaylist-container">
        {sortedSlaylists.map((item) => {
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
    </main>
  );
};

export default Main;
