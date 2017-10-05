import APIUtil from '../util/api-util';
import { receivePlaylists } from './playlist-actions';
import { startLoadingThrottle, LOADING_THROTTLE_DURATION } from './loading-actions';

export const RECEIVE_FOLLOWED_USERS          = 'RECEIVE_FOLLOWED_USERS';
export const START_LOADING_SINGLE_USER       = 'START_LOADING_SINGLE_USER';
export const RECEIVE_SINGLE_USER             = 'RECEIVE_SINGLE_USER';
export const RECEIVE_USERS_INDEX_ITEMS       = 'RECEIVE_USERS_INDEX_ITEMS';
export const START_LOADING_USERS_INDEX_ITEMS = 'START_LOADING_USERS_INDEX_ITEMS';


export const fetchUsersIndexItems = offset => (dispatch, getState) => {
  dispatch(startLoadingUsersIndexItems());

  const offset = getState().ui.usersIndex.items.length;
  return APIUtil.entities.fetchUsersIndexItems(offset)
    .then(payload =>
      setTimeout(() => {
        dispatch(receiveUsersIndexItems(payload));
      }, LOADING_THROTTLE_DURATION))
}

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

export const startLoadingUsersIndexItems = () => ({
  type: START_LOADING_USERS_INDEX_ITEMS
})

export const receiveUsersIndexItems = payload => ({
  type: RECEIVE_USERS_INDEX_ITEMS,
  payload
})


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
