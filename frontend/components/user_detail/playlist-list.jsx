import React from 'react';
import PlaylistListItem from './playlist-list-item';

const PlaylistList = ({ playlists }) => {
  if (!playlists[0]) {
    return null;
  }
  
  const items = playlists.map(
    playlist => <PlaylistListItem key={playlist.id} playlist={playlist} />
  );

  return (
    <div className="user-detail-playlist-list-container container-fluid scrollbar scroll-wrapper">
      <div className="row">
        {items}
      </div>
    </div>
  );
}

export default PlaylistList;
