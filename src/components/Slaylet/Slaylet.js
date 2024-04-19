import "./Slaylet.css";
import getChannelData from "../../utils/YoutubeApi";
import React, { useState, useEffect } from "react";

const Slaylet = ({ selectedSlaylistCard, slayletData }) => {
  //   console.log("selectedSlaylistCard in SlaylistModal", selectedSlaylistCard);

  const [youtubeData, setYoutubeData] = useState({});
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  //   const youtubeData = {};

  const defaultThumbnail =
    "https://media.istockphoto.com/id/1368368220/vector/clip-art-of-simple-smiley-face.jpg?s=170667a&w=0&k=20&c=G5bZrSoKefkqADINBXcRjvsMZArWgVWBeVi-XPc2rQI=";

  useEffect(() => {
    getChannelData(slayletData.channelId)
      .then((data) => {
        if (data.items && data.items.length > 0) {
          const channelData = data.items[0]; //interested in the first item only
          const thumbnailUrl = channelData.snippet.thumbnails.default.url; // You can choose 'default', 'medium', or 'high'
          setYoutubeData(youtubeData);
          setThumbnailUrl(thumbnailUrl);
        }
      })
      .catch((err) => console.log(err));
  }, [slayletData.channelId]);

  console.log(youtubeData);

  console.log(thumbnailUrl);

  //   const youtubeThumbnail = youtubeData["items"]; //.snippet.thumbnails.medium.url

  const youtubeThumbnail = thumbnailUrl; //defaultThumbnail;
  //   console.log(youtubeThumbnail);

  // const youtubeThumbnail = youtubeData.items.thumbnails.medium.url;

  //   console.log("Slaylet component", slayletData);
  return (
    <div className="slaylet">
      <div className="slaylet__content">
        <img
          className="slaylet__thumbnail"
          src={youtubeThumbnail ? youtubeThumbnail : defaultThumbnail}
          //   src={defaultThumbnail}
          alt="thumbnail"
        ></img>

        <div className="slaylet__info-container">
          <ul className="slaylet__info-list">
            <li className="slaylet__link">{slayletData.channelId}</li>
            <li className="slaylet__link">{slayletData.link}</li>
            <li className="slaylet__notes">{slayletData.notes}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Slaylet;
