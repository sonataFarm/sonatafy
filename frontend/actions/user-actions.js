export const RECEIVE_FOLLOWED_USERS = 'RECEIVE_FOLLOWED_USERS';

export const receiveFollowedUsers = followedUsers => ({
  type: RECEIVE_FOLLOWED_USERS,
  followedUsers
})
