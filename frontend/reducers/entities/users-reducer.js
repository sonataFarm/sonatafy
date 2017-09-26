import { RECEIVE_CURRENT_USER } from '../../actions/session-actions';

const UsersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        ...action.currentUser
      };
    default:
      return state;
  }
}

export default UsersReducer;
