import "./Slaylet.css";

const Slaylet = ({ selectedSlaylistCard, slayletData }) => {
  //   console.log("selectedSlaylistCard in SlaylistModal", selectedSlaylistCard);
  const thumbnail =
    "https://media.istockphoto.com/id/1368368220/vector/clip-art-of-simple-smiley-face.jpg?s=170667a&w=0&k=20&c=G5bZrSoKefkqADINBXcRjvsMZArWgVWBeVi-XPc2rQI=";
  // "https://images.vexels.com/media/users/3/326284/isolated/preview/780b6bee6d98c62cf72868d8d9066baa-neon-smiley-face.png";
  //   const link = "http://stuff.com";
  //   const notes =
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ";

  // For now the filter for data is coming from the default array of data and the only qualifier is the ID exists.
  // When I make the backend, slaylets will be pulled from the database based on matching to the slaylist ID.
  //   const data = defaultChannels.filter((channel) => channel.slaylist_id);
  console.log("Slaylet component", slayletData);
  return (
    <div className="slaylet">
      <img className="slaylet__thumbnail" src={thumbnail} alt="thumbnail"></img>

      <div className="slaylet__link">{slayletData.channelId}</div>
      <div className="slaylet__link">{slayletData.link}</div>
      <div className="slaylet__notes">{slayletData.notes}</div>
    </div>
  );
};

export default Slaylet;
