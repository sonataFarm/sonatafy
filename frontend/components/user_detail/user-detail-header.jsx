import React from 'react';
import Avatar from '../shared/avatar';
import FollowButtonContainer from '../shared/follow-button-container';

const UserDetailHeader = ({ user, isCurrentUser }) => (
  <div className="row row-margin user-detail-header-container">
    <div className="content-area">
      <Avatar email={ user.email } size={150} />
    </div>
    <div className="content-area info-box">
      <div className="user-detail-header category-header">
        { isCurrentUser ? "Welcome back," : "User" }
      </div>
      <div className="user-detail-username">
        { user.username }{ isCurrentUser ? '!' : '' }
      </div>
      { !isCurrentUser ? <FollowButtonContainer user={ user } /> : '' }
      <div className="user-detail-playlist-info">{ user.playlists.length } playlists</div>
    </div>
  </div>
);

export default UserDetailHeader;
