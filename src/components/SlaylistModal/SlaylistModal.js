import "./SlaylistModal.css";
import Slaylet from "../Slaylet/Slaylet";
import { defaultChannels } from "../../utils/constants";
import { useState } from "react";

const SlaylistModal = ({ selectedSlaylistCard, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

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
          {selectedSlaylistCard.category}
        </p>

        <div className="slaylist-modal__flex-container">
          <div className="slaylist-modal__title-tagline-likes-container">
            <p className="slaylist-modal__likes">
              ♡ {selectedSlaylistCard.likes}
            </p>
            <div className="slaylist-modal__title-tagline-container">
              <h3 className="slaylist-modal__title">
                {selectedSlaylistCard.title}
              </h3>
              <p className="slaylist-modal__tagline">
                {selectedSlaylistCard.tagline}
              </p>
            </div>
          </div>
          <div className="slaylist-modal__source-info-container">
            <p className="slaylist-modal__date-created">
              {selectedSlaylistCard.date_created}
            </p>
            <p className="slaylist-modal__owner">
              {selectedSlaylistCard.owner_id}
            </p>
          </div>
        </div>
        <div className="slaylist-modal__slaylet-container">{slaylets}</div>
      </div>
    </div>
    // </div>
  );
};

export default SlaylistModal;
