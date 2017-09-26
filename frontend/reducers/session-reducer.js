import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions/session-actions';

const _nullSession = {
  currentUser: null
};

const SessionReducer = (state = _nullSession, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const { currentUser } = action;
      return { currentUser };
    case REMOVE_CURRENT_USER:
      return { currentUser: null }
    default:
      return state;
  }
};

export default SessionReducer;
