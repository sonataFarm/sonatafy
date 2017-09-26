import React from 'react';
import PlaylistListItem from './playlist-list-item';

const PlaylistList = ({ playlists }) => {
  const playlistListItems = playlists.map(
    playlist => <PlaylistListItem key={playlist.id} playlist={playlist} />
  );

  return (
    <ul>
      {playlistListItems}
    </ul>
  );
}

export default PlaylistList;
