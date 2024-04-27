import "./NewSlaylet.css";
import { React, useState } from "react";

const NewSlaylet = (
  {
    // children,
    // buttonText = "Submit Slaylet",
    // onSubmit,
    // isLoading,
    // category,
  }
) => {
  const [handle, sethandle] = useState("");

  const handlehandleChange = (e) => {
    // console.log(e.target.value);
    sethandle(e.target.value);
  };

  const [notes, setNotes] = useState("");

  const handleNotesChange = (e) => {
    // console.log(e.target.value);
    setNotes(e.target.value);
  };

  return (
    <div className="new-slaylet">
      {/* <form className="new-slaylet__form"> */}
      {/* {children} */}

      <label className="new-slaylet__input-label">
        Handle
        <input
          className="new-slaylet__input"
          type="text"
          name="handle"
          placeholder="Account handle, i.e. TomScottGo"
          value={handle}
          onChange={handlehandleChange}
          required
        />
      </label>
      <label className="new-slaylet__input-label">
        Notes
        <textarea
          className="new-slaylet__input_notes"
          type="textarea"
          name="notes"
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          value={notes}
          onChange={handleNotesChange}
          max="500"
          // required
        />
      </label>
      {/* {alternativeText && (
            <p>
              <button
                className="new-slaylet__alternative-button"
                type="button"
                onClick={handleAltClick}
              >
                {alternativeText}
              </button>
            </p>
          )} */}
      {/* </form> */}
    </div>
  );
};

export default NewSlaylet;
