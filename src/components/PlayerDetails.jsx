import React from "react";

const PlayerDetails = (props) => {
    const {img_src, title, artist} = props.song
  return <div className="c-player-details">
    <div className="details-img">
        <img src={img_src} alt="images" />
    </div>
    <div className="details-title">
        <h3>{title}</h3>
    </div>
    <div className="details-artist">
        <h4>{artist}</h4>
    </div>

    
    
  </div>;
};

export default PlayerDetails;
