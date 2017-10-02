import React from 'react';
import Avatar from '../shared/avatar';
import { Link } from 'react-router-dom';

const FollowedUsersListItem = ({ user }) => (
  <li className="followed-users-list-item-container">
    <Avatar email={ user.email } />
    <div className="info">
      <Link to={`/users/${user.id}`}>
        { user.username }
      </Link>
      <Link to={`/users/${user.id}`}>
        { `${user.playlists.length} playlists` }
      </Link>
    </div>
  </li>
);

export default FollowedUsersListItem;
