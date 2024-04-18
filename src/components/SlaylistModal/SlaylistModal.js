import "./SlaylistModal.css";

const SlaylistModal = ({ selectedSlaylistCard, onClose }) => {
  console.log("selectedSlaylistCard in SlaylistModal", selectedSlaylistCard);
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
      </div>
    </div>
    // </div>
  );
};

export default SlaylistModal;
