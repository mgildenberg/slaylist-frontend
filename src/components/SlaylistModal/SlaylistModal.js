import "./SlaylistModal.css";
import Slaylet from "../Slaylet/Slaylet";
import { defaultChannels } from "../../utils/constants";
import { useState, useContext, useEffect } from "react";
import { CurrentScreenSizeContext } from "../../contexts/ScreenSizeContext";

const SlaylistModal = ({
  selectedSlaylistCard,
  onClose,
  isLiked,
  isLoggedIn,
  onNotLoggedIn,
}) => {
  // For now the filter for data is coming from the default array of data and the only qualifier is the ID exists.
  // When I make the backend, slaylets will be pulled from the database based on matching to the slaylist ID.
  const data = defaultChannels.filter((channel) => channel.slaylist_id);
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

  // This context will allow the code to move certain elements (the Like button) around based on screen size
  const { currentScreenWidth } = useContext(CurrentScreenSizeContext);

  const smallScreen = currentScreenWidth <= 479 ? true : false;

  const [isSlaylistModalLiked, setIsSlaylistModalLiked] = useState(isLiked);

  function handleLike(e) {
    if (!isLoggedIn) {
      // Can view a slaylist but cannot Like if the user is not logged in
      e.stopPropagation(); // to prevent the modal from opening if you don't want it to
      onNotLoggedIn("SlaylistModal");
      return;
    }
    // When there is a backend, this could be an API call to update the likes for this card in the database
    // For now, it's just a visual change
    // It does not communicate back to the SlaylistCard component
    e.stopPropagation(); // to prevent the modal from opening if you don't want it to
    setIsSlaylistModalLiked(!isSlaylistModalLiked);
  }

  const likesElement = (
    <div
      className={`slaylist-modal__likes-container ${
        smallScreen ? "slaylist-modal__likes-container_float" : ""
      }`}
    >
      <button
        className={`slaylist-modal__like-button ${
          isSlaylistModalLiked ? "slaylist-modal__like-button_active" : ""
        }`}
        onClick={handleLike}
        type="button"
      ></button>
      <p className="slaylist-modal__likes">
        {isSlaylistModalLiked
          ? selectedSlaylistCard.likes + 1
          : selectedSlaylistCard.likes}
      </p>
    </div>
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
