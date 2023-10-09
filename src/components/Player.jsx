import React, {useRef,  useState, useEffect} from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControl from "./PlayerControl";


const Player = (props) => {

  const audioEl = useRef(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    if(isPlayingAudio){
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const SkipSong = (forwards = true ) => {
    if(forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++
        if(temp > props.song.length - 1){
          temp = 0;
        }
        return temp
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--
        if(temp < 0) {
          temp = props.song.length - 1;
        }
        return temp;
      });
    }
  }

  return <div className="c-player">
            <audio src={props.song[props.currentSongIndex].src} ref={audioEl}></audio>
            <h4>React Music Player App</h4>
            <h4>Playing Now</h4>
            

            {/* DETAILS */}
            <PlayerDetails song={props.song[props.currentSongIndex]}/>

            {/* CONTROLS */}
            <PlayerControl isPlayingAudio={isPlayingAudio} setIsPlayingAudio={setIsPlayingAudio} SkipSong={SkipSong}/>

            <p><strong>Next Song : </strong> {props.song[props.nextSongIndex].title} by {props.song[props.nextSongIndex].artist}</p>
        </div>;
};

export default Player;
