import React, { useState, useEffect } from "react";
import Player from "./components/Player";
import "./index.css";

const App = () => {
  const [songs] = useState([
    {
      title : "Castle of Glass",
      artist : "Linkin Park",
      img_src: "./images/castle of glass.jpg",
      src : "./music/CASTLE OF GLASS [Official Music Video] - Linkin Park.mp3"
    },
    {
      title : "Breaking The Habit",
      artist : "Linkin Park",
      img_src: "./images/breaking the habit.jpg",
      src : "./music/Breaking the Habit (Official Music Video) [HD UPGRADE]  Linkin Park.mp3"
    },
    {
      title : "Business",
      artist : "Tiesto",
      img_src: "./images/business.jpg",
      src: "./music/Tiësto - The Business (Official Music Video).mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if(currentSongIndex + 1 > songs.length - 1) {
        return 0
      } else {
        return currentSongIndex + 1
      }
    })
  }, [currentSongIndex])

  return <div className="App">
            <Player currentSongIndex={currentSongIndex} 
               setCurrentSongIndex={setCurrentSongIndex}
               nextSongIndex={nextSongIndex}
               song={songs}
            />
        </div>;
};

export default App;
