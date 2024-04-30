import "./Slaylet.css";
import getChannelData from "../../utils/YoutubeApi";
import React, { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";

const Slaylet = ({ selectedSlaylistCard, slayletData }) => {
  // selectedSlaylistCard will be utilized when there is a backend to pull data from
  // For now, it's not necessary, but I'm keeping it in the props for future use

  const [youtubeData, setYoutubeData] = useState({});
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const defaultThumbnail =
    "https://media.istockphoto.com/id/1368368220/vector/clip-art-of-simple-smiley-face.jpg?s=170667a&w=0&k=20&c=G5bZrSoKefkqADINBXcRjvsMZArWgVWBeVi-XPc2rQI=";

  useEffect(() => {
    setIsLoading(true);
    // creating time for the Preloader to show, otherwise Youtube API is too fast
    setTimeout(() => {
      getChannelData(slayletData.channelId)
        .then((data) => {
          if (data.items && data.items.length > 0) {
            const channelData = data.items[0]; //interested in the first item only
            const thumbnailUrl = channelData.snippet.thumbnails.default.url; // found that not all channels have 'high' res images, default is safest
            setYoutubeData(youtubeData);
            setThumbnailUrl(thumbnailUrl);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }, 500);
  }, [slayletData.channelId, youtubeData]);

  const youtubeThumbnail = thumbnailUrl;

  return (
    <div className="slaylet">
      <div className="slaylet__content">
        <div className="slaylet__thumbnail_background">
          {isLoading ? (
            <Preloader />
          ) : (
            <img
              className="slaylet__thumbnail"
              src={youtubeThumbnail ? youtubeThumbnail : defaultThumbnail}
              alt={`thumbnail for ${slayletData.channelId}`}
            ></img>
          )}
        </div>
        <div className="slaylet__info-container">
          <ul className="slaylet__info-list">
            <li className="slaylet__list-item">
              <a
                className="slaylet__link"
                target="_blank"
                rel="noreferrer noopener"
                href={slayletData.link}
              >
                {slayletData.channelId}{" "}
              </a>
            </li>
            <li className="slaylet__notes">{slayletData.notes}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Slaylet;
