import React from 'react';

export const PlaylistListItem = ({ playlist }) => (
  <li>
    <Link to={`/playlists/:${playlist.id}`}>{playlist.title}</Link>
  </li>
)

export default PlaylistListItem;
