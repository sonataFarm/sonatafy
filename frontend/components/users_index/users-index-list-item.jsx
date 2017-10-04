import React from 'react';
import Avatar from '../shared/avatar';
import { Link } from 'react-router-dom';
import PlaylistListItem from '../user_detail/playlist-list-item';

const UsersIndexListItem = ({ item }) => {
  const { user, playlists } = item;

  return (
    <div className="users-index-list-item-container">
      <div className="user-info">
        <Avatar email={ user.email } size={150} />
        <div className="user-text">
          <div className="username">{ user.username } </div>
          <Link to={`/users/${user.id}`}>
            <button className="btn btn-primary">View User</button>
          </Link>
        </div>
      </div>
      <div className="playlist-container">
        <ul className="playlist-items">
          <PlaylistListItem playlist={ playlists[0] } />
          <PlaylistListItem playlist={ playlists[1] } />
          <PlaylistListItem playlist={ playlists[3] } />
        </ul>
        { user.playlists.length - 2 > 1 ? (
          <Link to={`/users/${user.id}`}>
            <li>...and{` ${user.playlists.length - 2} more playlists`}</li>
          </Link>
        ) : ''
        }
      </div>
      <div className="invisible"></div>
    </div>
  );
}

export default UsersIndexListItem;
