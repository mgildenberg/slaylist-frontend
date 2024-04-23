import "./NewSlaylist.css";
// import { Link } from "react-router-dom";
import { React, useState } from "react";

const NewSlaylist = ({
  children,
  buttonText = "Submit Slaylist",
  onSubmit,
  isLoading,
}) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => {
    // console.log(e.target.value);
    setTitle(e.target.value);
  };

  const [tagline, setTagline] = useState("");

  const handleTaglineChange = (e) => {
    // console.log(e.target.value);
    setTagline(e.target.value);
  };

  return (
    <div className="new-slaylist">
      hi, new slaylist here!
      <form className="new-slaylist__form" onSubmit={onSubmit}>
        {/* {children} */}
        <label>
          Title
          <input
            className="new-slaylist__input"
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </label>
        <label>
          Tagline
          <input
            className="new-slaylist__input"
            type="text"
            name="tagline"
            placeholder="Tagline"
            value={tagline}
            onChange={handleTaglineChange}
            // required
          />
        </label>
        <label>
          Slaylist Type
          <select
            className="new-slaylist__dropdown new-slaylist__input" // need to remove the new-slaylist__input class and style the dropdown
            id="slaylist-type"
            name="slaylist-type"
            required
          >
            <option value="Youtube accounts" selected>
              Youtube accounts
            </option>
            <option value="Instagram accounts" disabled="true">
              [Coming soon] Instagram accounts
            </option>
            <option value="TikTok accounts" disabled="true">
              [Coming soon] TikTok accounts
            </option>
            <option value="Spotify albums" disabled="true">
              [Coming soon] Spotify albums
            </option>
          </select>
        </label>

        <button className="new-slaylist__add-new-button" type="button">
          Add New
        </button>

        <div className="new-slaylist__button-container">
          <button className="new-slaylist__submit-button" type="submit">
            {isLoading ? "Saving..." : buttonText}
          </button>
          {/* {alternativeText && (
            <p>
              <button
                className="new-slaylist__alternative-button"
                type="button"
                onClick={handleAltClick}
              >
                {alternativeText}
              </button>
            </p>
          )} */}
        </div>
      </form>
    </div>
  );
};

export default NewSlaylist;
