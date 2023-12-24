import React, { useRef, useState } from 'react';
import backgroundMusic from "./audios/ocean_sound.mp3";

export const AudioButton = () => {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <button className="absolute right-0 p-4 mt-2 text-right text-white transition-colors bottom-20 bg-amber-600 rounded-l-xl hover:bg-amber-500" onClick={toggleAudio}>
        <img width="43px" src={isPlaying ? "/pictures/volume_on.png" : "/pictures/volume_off.png"} />
      </button>
      <audio ref={audioRef} controls loop>
        <source src={backgroundMusic} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
};
