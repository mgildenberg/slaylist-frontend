import "./NewSlaylist.css";
// import { Link } from "react-router-dom";
import { React, useState } from "react";
import NewSlaylet from "../NewSlaylet/NewSlaylet";

const NewSlaylist = ({
  children,
  buttonText = "Submit Slaylist",
  onSubmit,
  isLoading,
}) => {
  const [title, setTitle] = useState("");
  const [slaylistSubmitRequest, setSlaylistSubmitRequest] = useState({
    title: "",
    tagline: "",
    category: "",
    slaylets: [],
  });

  const handleTitleChange = (e) => {
    // console.log(e.target.value);
    setTitle(e.target.value);
    // setSlaylistSubmitRequest((slaylistSubmitRequest.title = title));
  };

  const [tagline, setTagline] = useState("");

  const handleTaglineChange = (e) => {
    // console.log(e.target.value);
    setTagline(e.target.value);
    // setSlaylistSubmitRequest((slaylistSubmitRequest.tagline = tagline));
  };

  const [category, setCategory] = useState("");

  const handleCategoryChange = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
    // setSlaylistSubmitRequest((slaylistSubmitRequest.category = category));
    // console.log(slaylistSubmitRequest);
  };

  const [slaylets, setSlaylets] = useState([]);

  // Handler to add a new Slaylet form to the state
  const handleAddEntryClick = () => {
    // Create a new entry with a unique identifier, e.g., current timestamp
    const newEntry = {
      id: Date.now(), // Unique ID for key purposes (will later replace with UUID or similar)
    };
    setSlaylets([...slaylets, newEntry]);
  };

  return (
    <div className="new-slaylist">
      New Slaylist Form
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
            onChange={handleCategoryChange}
            defaultValue={"Youtube accounts"}
            multiple={false}
            required
          >
            <option value="Youtube accounts">Youtube accounts</option>
            <option value="Test">(Don't Use) Test</option>
            <option value="Instagram accounts" disabled={true}>
              [Coming soon] Instagram accounts
            </option>
            <option value="TikTok accounts" disabled={true}>
              [Coming soon] TikTok accounts
            </option>
            <option value="Spotify albums" disabled={true}>
              [Coming soon] Spotify albums
            </option>
          </select>
        </label>
        {/* {[...Array(currentSlayletForms)].map((e, i) => (
          <NewSlaylet key={i} category={category} />
        ))} */}
        <div className="new-slaylist__slaylets-container">
          {slaylets.map((slaylet) => (
            <NewSlaylet key={slaylet.id} />
          ))}
        </div>
        <button
          className="new-slaylist__add-new-button"
          type="button"
          //   onClick={incrementSlayletForms}
          onClick={handleAddEntryClick}
        >
          Add New Entry
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
