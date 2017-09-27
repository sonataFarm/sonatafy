import React from 'react';
import PlaylistListItem from './playlist-list-item';

const PlaylistList = ({ playlists }) => {
  const playlistListItems = playlists.map(
    playlist => <PlaylistListItem key={playlist.id} playlist={playlist} />
  );
  return (
    <div className="playlist-list">
      <span className="category-header">Your Playlists</span>
      <div className="list-group">
        {playlistListItems}
      </div>
    </div>
  );
}

export default PlaylistList;
