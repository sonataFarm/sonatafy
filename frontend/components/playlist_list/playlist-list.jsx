import React from 'react';
import PlaylistListItem from './playlist-list-item';

const PlaylistList = ({ playlists }) => {
  const playlistListItems = playlists.map(
    playlist => <PlaylistListItem key={playlist.id} playlist={playlist} />
  );
  return (
    <div className="playlist-list">

      <div className="list-group">
        <div className="category-header"> Your Playlists </div>
        {playlistListItems}
      </div>
    </div>
  );
}

export default PlaylistList;
