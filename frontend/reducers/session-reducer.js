import { RECEIVE_CURRENT_USER } from '../actions/session-actions';

const _nullSession = {
  currentUser: null
};

const SessionReducer = (state = _nullSession, action) => {
  switch (action.type) {

    case RECEIVE_CURRENT_USER:
      const { currentUser } = action;
      return { currentUser };

    default:
      return state;
  }
};

export default SessionReducer;
