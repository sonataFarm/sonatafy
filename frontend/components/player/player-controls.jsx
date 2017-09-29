import React from 'react';

class PlayerControls extends React.Component {

  render() {
    const {
      currentTrack, playPreviousTrack, playNextTrack, pause, play
    } = this.props;

    return (
      <div className="player-controls-container">
        <i
          className="fa fa-step-backward fa"
          aria-hidden="true"
          onClick={playPreviousTrack}>
        </i>
        { currentTrack.status === "PLAYING" ? (
          <i
            className="fa fa-pause-circle fa-lg"
            aria-hidden
            onClick={pause}>
          </i>
        ) : (
          <i
            className="fa fa-play-circle fa-lg"
            aria-hidden
            onClick={play}>
          </i>
        )}
        <i
          className="fa fa-step-forward fa"
          aria-hidden="true"
          onClick={playNextTrack}>
        </i>
      </div>
    );
  }
}

export default PlayerControls;
