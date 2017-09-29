import React from 'react';
import PlayerControlsContainer from './player-controls-container';
import ProgressBar from './progress-bar';

const PlayerMain = ({ currentTrack, howl }) => (
  <div className="player-main-container col-8 col-md-6">
    <PlayerControlsContainer />
    <div className="progress-bar-container">
      <ProgressBar currentTrack={currentTrack} howl={howl} />
    </div>
  </div>
);

export default PlayerMain;
