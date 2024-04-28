import "./SlaylistModal.css";
import Slaylet from "../Slaylet/Slaylet";
import { defaultChannels } from "../../utils/constants";
import { useState, useContext } from "react";
import { CurrentScreenSizeContext } from "../../contexts/ScreenSizeContext";

const SlaylistModal = ({ selectedSlaylistCard, onClose }) => {
  // For now the filter for data is coming from the default array of data and the only qualifier is the ID exists.
  // When I make the backend, slaylets will be pulled from the database based on matching to the slaylist ID.
  const data = defaultChannels.filter((channel) => channel.slaylist_id);
  // console.log(data);
  const slaylets = data.map((slaylet) => {
    return (
      <Slaylet
        key={slaylet._id}
        selectedSlaylistCard={selectedSlaylistCard}
        slayletData={slaylet}
      />
    );
  });

  const sourceInfoElement = (
    <div className="slaylist-modal__source-info-container">
      <p className="slaylist-modal__date-created">
        {selectedSlaylistCard.date_created}
      </p>
      <p className="slaylist-modal__owner">{selectedSlaylistCard.owner_id}</p>
    </div>
  );

  // This context will allow the code to move certain elements around based on screen size
  const { currentScreenWidth } = useContext(CurrentScreenSizeContext);
  // console.log(currentScreenWidth);

  const smallScreen = currentScreenWidth <= 479 ? true : false;

  const likesElement = (
    <p
      className={`slaylist-modal__likes ${
        smallScreen ? "slaylist-modal__likes_float" : ""
      }`}
    >
      ♡ {selectedSlaylistCard.likes}
    </p>
  );

  // console.log(smallScreen);

  // console.log("selectedSlaylistCard in SlaylistModal", selectedSlaylistCard);
  return (
    <div className={"slaylist-modal"}>
      <div className="slaylist-modal__content">
        {/* <div className="slaylist-modal__title-close-button-container"> */}
        <button
          className="slaylist-modal__close-button"
          type="button"
          onClick={onClose}
        />
        <p className="slaylist-modal__category">
          Category: {selectedSlaylistCard.category}
        </p>
        {smallScreen ? likesElement : null}

        <div className="slaylist-modal__flex-container">
          <div className="slaylist-modal__title-tagline-likes-container">
            {smallScreen ? null : likesElement}
            <div className="slaylist-modal__title-tagline-container">
              <h3 className="slaylist-modal__title">
                {selectedSlaylistCard.title}
              </h3>
              <p className="slaylist-modal__tagline">
                {selectedSlaylistCard.tagline}
              </p>
            </div>
          </div>
          {smallScreen ? null : sourceInfoElement}
        </div>
        <div className="slaylist-modal__slaylet-container">{slaylets}</div>
        {smallScreen ? sourceInfoElement : null}
      </div>
    </div>
  );
};

export default SlaylistModal;
