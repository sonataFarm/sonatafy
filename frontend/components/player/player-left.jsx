import React from 'react';
import Image from '../shared/image';

const PlayerLeft = ({ currentTrack }) => (
  <div className="player-left-container col-4 col-md-3">
    { currentTrack.img_url ?
      <Image className="thumb-sm" url={currentTrack.img_url} />
      : ''
    }
    <div className="track-info">
      <div>
        {currentTrack.title}
      </div>
      <div>
        {currentTrack.composer}
      </div>
    </div>
  </div>
)

export default PlayerLeft;
