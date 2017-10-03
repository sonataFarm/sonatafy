import React from 'react';
import VolumeSliderContainer from '../volume_slider/volume-slider-container';


const PlayerRight = () => (
  <div className="player-right-container col-md-3">
    <div className="volume-control">
      <VolumeSliderContainer />
    </div>
  </div>
);

{/* <VolumeSliderContainer
  isEnabled={true}
  volume={0.5}
  onVolumeChange={ volume => console.log(volume) } /> */}

export default PlayerRight;
