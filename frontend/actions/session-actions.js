import APIUtil from '../util/api-util';
import { receivePlaylists } from './playlist-actions';
import { receiveFollowedUsers } from './user-actions';

export const
  RECEIVE_CURRENT_USER   = 'RECEIVE_CURRENT_USER',
  RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS',
  REMOVE_CURRENT_USER    = 'REMOVE_CURRENT_USER';

export const signup = user => dispatch => (
  APIUtil.session.signup(user)
  .then(
    data => dispatch(receiveUserData(data)),
    errors => dispatch(receiveSessionErrors(errors))
  )
);

export const login = user => dispatch => (
  APIUtil.session.login(user)
    .then(
      data => dispatch(receiveUserData(data)),
      errors => dispatch(receiveSessionErrors(errors))
    )
);

export const logout = () => dispatch => (
  APIUtil.session.logout()
    .then(
      () => dispatch(removeCurrentUser()),
      errors => dispatch(receiveSessionErrors(errors))
    )
);

export const receiveUserData = data => dispatch => (
  Promise.all([
    dispatch(receiveFollowedUsers(data.followedUsers)),
    dispatch(receivePlaylists(data.playlists)),
    dispatch(receiveCurrentUser(data.user))
  ])
);

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const removeCurrentUser = () => ({
  type: REMOVE_CURRENT_USER
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});
