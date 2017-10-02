import React from 'react';
import FollowedUsersListItem from './followed-users-list-item';

const FollowedUsersList = ({ followedUsers }) => {
  const items = followedUsers.map(user => <FollowedUsersListItem key={user.id} user={user} />);

  return (
    <ul>
      {items}
    </ul>
  );
}

export default FollowedUsersList;
