import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export const PlaylistListItem = ({ playlist, match }) => {
  return (
    <Link
      className="playlist-list-item list-group-item list-group-item-action"
      to={`/playlists/${playlist.id}`}>
        { playlist.title }
    </Link>
  );
}

export default withRouter(PlaylistListItem);
