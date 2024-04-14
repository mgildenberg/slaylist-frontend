import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText = "Submit",
  title,
  onClose,
  name,
  isOpen,
  onSubmit,
  isLoading,
  alternativeText,
  handleAltClick,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        />
        <h3>{title}</h3>
        <form onSubmit={onSubmit}>
          {children}
          <div className="modal__button-container">
            <button className="modal__submit-button" type="submit">
              {isLoading ? "Saving..." : buttonText}
            </button>
            {alternativeText && (
              <p>
                <button
                  className="modal__alternative-button"
                  type="button"
                  onClick={handleAltClick}
                >
                  {alternativeText}
                </button>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
