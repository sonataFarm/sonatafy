import React from 'react';
import FollowedUsersList from './followed-users-list';
import { Link } from 'react-router-dom';

const RightSidebar = ({ followedUsers }) => (
  <div>
    <h3>Followed Users</h3>
    <FollowedUsersList followedUsers={followedUsers} />
    <Link to="/users"> <button className="btn btn-primary">Find Friends</button></Link>
  </div>
);

export default RightSidebar;
