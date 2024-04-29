import React from "react";
import "./Main.css";
import { topSlaylists } from "../../utils/constants";
import SlaylistCard from "../SlaylistCard/SlaylistCard";
import { useState, useEffect } from "react";

const Main = ({ onSelectedSlaylistCard }) => {
  // console.log(onSelectedSlaylistCard);
  // console.log(topSlaylists);
  const sortedSlaylists = topSlaylists.sort((a, b) => b.likes - a.likes);

  // const [isLiked, setIsLiked] = useState(false);

  // useEffect(() => {
  //   const handleLike = (e) => {
  //     if (e.target.classList.value.endsWith("like__button")) {
  //       console.log("like button clicked");
  //       console.log(e.target.classList.value);
  //       setIsLiked(!isLiked);
  //     }
  //   };
  // }, [isLiked]);

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
