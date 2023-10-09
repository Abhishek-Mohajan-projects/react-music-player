import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faBackward, faPause, faForward} from "@fortawesome/free-solid-svg-icons";


const PlayerControl = (props) => {
  return  (
        <div className="c-player-control">
            <button className="skip-btn" onClick={() => props.SkipSong(false)}>
              <FontAwesomeIcon icon={faBackward}/>
            </button>
            <button className="play-btn" onClick={() => props.setIsPlayingAudio(!props.isPlayingAudio)}>
              <FontAwesomeIcon icon={props.isPlayingAudio ? faPause : faPlay}/>
            </button>
            <button className="skip-btn" onClick={()=> props.SkipSong(true)}>
              <FontAwesomeIcon icon={faForward}/>
            </button>
        </div>
  );
};

export default PlayerControl;
