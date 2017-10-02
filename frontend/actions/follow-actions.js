export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const RECEIVE_UNFOLLOW = 'RECEIVE_UNFOLLOW';

export const receiveFollow = id => ({
  type: RECEIVE_FOLLOW,
  id
});

export const receiveUnfollow = id => ({
  type: RECEIVE_UNFOLLOW,
  id
});

export const createFollow = id => (dispatch, getState) => (
  APIUtil.entities.createFollow({
    followerID: getState().session.currentUser.id,
    followedUserID: id
  }).then(
    () => dispatch(receiveFollow(id))
  )
);

export const destroyFollow = id => (dispatch, getState) => (
  APIUtil.entities.destroyFollow({
    followerID: getState().session.currentUser.id,
    followedUserID: id
  }).then(
    () => dispatch(receiveUnfollow(id))
  )
);
