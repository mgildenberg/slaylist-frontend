import "./NewSlaylet.css";
import { React, useState } from "react";
import getChannelData from "../../utils/YoutubeApi";
import Preloader from "../Preloader/Preloader";
import { useEffect } from "react";

const NewSlaylet = () => {
  const [youtubeData, setYoutubeData] = useState({});
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isHandleError, setIsHandleError] = useState(false);

  const defaultThumbnail =
    "https://media.istockphoto.com/id/1368368220/vector/clip-art-of-simple-smiley-face.jpg?s=170667a&w=0&k=20&c=G5bZrSoKefkqADINBXcRjvsMZArWgVWBeVi-XPc2rQI=";

  const youtubeThumbnail = thumbnailUrl;

  // handleHandleChange is called with every keystroke, updating the state with the new input value.
  // With each keystroke, the 800ms timer is reset and starts a new 800ms timer.
  // If the user stops typing for 800ms, the timeout completes and getChannelData is called with the current input value.
  // From the user POV, the thumbnail only appears when they are done typing.

  const [handle, setHandle] = useState("");
  const [handleLength, setHandleLength] = useState(handle.length);
  const [timeoutRef, setTimeoutRef] = useState(null);

  useEffect(() => {
    if (handle.length === 0) {
      setIsHandleError(false);
      setThumbnailUrl("");
    }

    if (timeoutRef) clearTimeout(timeoutRef);

    const timeout = setTimeout(() => {
      setHandleLength(handle.length);
      setIsLoading(true);
      // creating time for the Preloader to show, otherwise Youtube API is too fast
      setTimeout(() => {
        getChannelData(handle)
          .then((data) => {
            if (data.items && data.items.length > 0) {
              const channelData = data.items[0]; //interested in the first item only
              const thumbnailUrl = channelData.snippet.thumbnails.default.url; // found that not all channels have 'high' res images, default is safest
              setYoutubeData(youtubeData);
              setThumbnailUrl(thumbnailUrl);
              setIsHandleError(false);
            } else {
              // YoutubeAPI channel search does not error out but I found that an invalid handle will return a response lacking the "items" object
              // My code will instead clear any state variable to trigger the error message in CSS
              setYoutubeData({});
              setThumbnailUrl(defaultThumbnail);
              setIsHandleError(true);
              console.log("Invalid handle");
            }
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => setIsLoading(false));
      }, 500);
    }, 800);

    setTimeoutRef(timeout);

    // Cleanup function
    return () => {
      clearTimeout(timeout);
    };
  }, [handle]); // Effect depends on curent handle in the input field

  const handleHandleChange = (event) => {
    setHandle(event.target.value);
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
      <div className="new-slaylet__thumbnail_background">
        {isLoading ? (
          <Preloader />
        ) : (
          <img
            className="new-slaylet__thumbnail"
            src={youtubeThumbnail ? youtubeThumbnail : defaultThumbnail}
            alt={`thumbnail for ${handle}`}
          ></img>
        )}
        <p
          className={
            handleLength > 0 && isHandleError
              ? "new-slaylet__thumbnail-helper-text_error"
              : "new-slaylet__thumbnail-helper-text"
          }
        >
          {
            // this combination of conditions will display the error message
            isHandleError && // user typed an entry and it didn't return any useful records
            timeoutRef && // user isn't currently typing
            handle !== "" && // handle itself isn't empty
            handleLength > 0 && // handle has characters
            !isLoading && // not currently loading
            youtubeThumbnail === defaultThumbnail // thumbnail is default
              ? "Invalid handle"
              : null
          }
          {
            // This condition reminds the user to enter a handle
            handleLength === 0 // handle is empty
              ? "Enter a handle"
              : null
          }
        </p>
      </div>
      <label className="new-slaylet__input-label">
        Handle
        <input
          className="new-slaylet__input"
          type="text"
          name="handle"
          placeholder="Account handle, i.e. TomScottGo"
          value={handle}
          onChange={handleHandleChange}
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
    </div>
  );
};

export default NewSlaylet;
