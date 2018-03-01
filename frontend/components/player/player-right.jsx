import React from 'react';
import VolumeSlider from './volume-slider';


const PlayerRight = ({ volume, setVolume }) => (
  <div className="player-right-container col-md-3">
    <div className="volume-control">
      <VolumeSlider
        volume={volume}
        setVolume={setVolume}
      />
    </div>
  </div>
);

export default PlayerRight;
