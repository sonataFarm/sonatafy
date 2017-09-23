import APIUtil from '../util/api-util';

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

export const login = user => dispatch => (
  APIUtil.login(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveSessionErrors(errors))
    )
);

export const logout = () => dispatch => (
  APIUtil.logout()
    .then(
      () => dispatch(receiveCurrentUser(null)),
      errors => dispatch(receiveSessionErrors(errors))
    )
);

export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveSessionErrors(errors))
    )
);
