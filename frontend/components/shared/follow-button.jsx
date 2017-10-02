import React from 'react';

const FollowButton = ({ followed, createFollow, destroyFollow }) => (
  <div className="follow-button-container">
    {followed ? (
      <button onClick={destroyFollow} className="btn btn-unfollow">
        Unfollow
      </button>
    ) : (
      <button onClick={createFollow} className="btn btn-follow">
        Follow
      </button>
    )}
  </div>
);

export default FollowButton;
