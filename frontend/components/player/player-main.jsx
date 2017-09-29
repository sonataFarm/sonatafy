import React from 'react';
import PlayerControlsContainer from './player-controls-container';
import ProgressBarContainer from './progress-bar';

const PlayerMain = ({ currentTrack, howl }) => (
  <div className="player-main-container col-8 col-md-6">
    <PlayerControlsContainer />
    <div className="progress-bar-container">
      <ProgressBarContainer currentTrack={currentTrack} howl={howl} />
    </div>
  </div>
);

export default PlayerMain;
