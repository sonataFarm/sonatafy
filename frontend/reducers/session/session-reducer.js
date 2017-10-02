import CurrentUserReducer from './current-user-reducer';

import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../../actions/session-actions';

import { RECEIVE_FOLLOW, RECEIVE_UNFOLLOW } from '../../actions/follow-actions';

const _nullSession = {
  currentUser: null
};

const SessionReducer = (state = _nullSession, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        currentUser: CurrentUserReducer(undefined, action)
      };

    case REMOVE_CURRENT_USER:
      return {
        ...state,
        currentUser: CurrentUserReducer(undefined, action)
      }

    case RECEIVE_FOLLOW:
      return {
        ...state,
        currentUser: CurrentUserReducer(state.currentUser, action)
      };

    case RECEIVE_UNFOLLOW:
      return {
        ...state,
        currentUser: CurrentUserReducer(state.currentUser, action)
      }

    default:
      return state;
  }
};

export default SessionReducer;
