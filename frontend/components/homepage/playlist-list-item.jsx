import React from 'react';
import { Link } from 'react-router-dom';

export const PlaylistListItem = ({ playlist }) => (
  <li>
    <Link to={`/playlists/:${playlist.id}`}>{playlist.title}</Link>
  </li>
)

export default PlaylistListItem;
