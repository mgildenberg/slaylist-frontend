import React from "react";
import "./Main.css";
import topSlaylists from "../../utils/constants";
import SlaylistCard from "../SlaylistCard/SlaylistCard";

const Main = () => {
  console.log(topSlaylists);
  return (
    <main className="main">
      Today's top slaylists:
      <div className="slaylist-container">
        {topSlaylists.map((item) => {
          // create a new SlaylistCard component for each item in the topSlaylists array
          return (
            <SlaylistCard
              item={item}
              //   onCardLike={onCardLike}
              //   onSelectCard={onSelectCard}
              key={item._id}
              // likes={item.likes}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Main;
