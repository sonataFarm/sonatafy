import APIUtil from '../util/api-util';
import { receivePlaylists } from './playlist-actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const receiveUserData = data => dispatch => {
  dispatch(receiveCurrentUser(data.user));
  dispatch(receivePlaylists(data.playlists));
}

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
      () => dispatch(receiveCurrentUser(null)),
      errors => dispatch(receiveSessionErrors(errors))
    )
);
