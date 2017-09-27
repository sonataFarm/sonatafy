import React from 'react';
import { Link } from 'react-router-dom';

export const PlaylistListItem = ({ playlist }) => (
    <Link
      className="playlist-list-item list-group-item list-group-item-action"
      to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
)

export default PlaylistListItem;
