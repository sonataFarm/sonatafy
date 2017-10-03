import APIUtil from '../util/api-util';
import { receivePlaylists } from './playlist-actions';
import { startLoadingThrottle } from './loading-actions';

export const RECEIVE_FOLLOWED_USERS = 'RECEIVE_FOLLOWED_USERS';
export const START_LOADING_SINGLE_USER = 'START_LOADING_SINGLE_USER';
export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';

export const startLoadingSingleUser = () => ({
  type: START_LOADING_SINGLE_USER
});

export const receiveFollowedUsers = followedUsers => ({
  type: RECEIVE_FOLLOWED_USERS,
  followedUsers
});

export const receiveSingleUser = user => ({
  type: RECEIVE_SINGLE_USER,
  user
});

export const fetchSingleUser = id => dispatch => {
  dispatch(startLoadingSingleUser());
  dispatch(startLoadingThrottle());

  return APIUtil.entities.fetchSingleUser(id)
    .then(data => {
      dispatch(receivePlaylists(data.playlists));
      dispatch(receiveSingleUser(data.user));
    }
  );
};
