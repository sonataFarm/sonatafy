import React from 'react';
import Thumbnail from '../shared/thumbnail';
import { Link } from 'react-router-dom';

const PlaylistListItem = ({ playlist }) => (
  <div className="user-detail-playlist-list-item-container col-4">
    <Link to={`/playlists/${playlist.id}`}>
      <div className="card">
        <Thumbnail url={ playlist.img_url } />
        <div className="playlist-title">
          { playlist.title }
        </div>
        <div className="playlist-length">
          { playlist.tracks.length } tracks
        </div>
      </div>
    </Link>
  </div>
);

export default PlaylistListItem;
