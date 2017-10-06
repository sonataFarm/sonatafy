import React from 'react';
import UsersIndexListItem from './users-index-list-item';

const UsersIndexList = ({ items }) => {
  debugger;
  const listItems = items.map(
    item => <UsersIndexListItem key={item.user.id} item={item} />
  );

  return (
    <ul className="users-index-list-container">
      { listItems }
    </ul>
  );
}

export default UsersIndexList;
