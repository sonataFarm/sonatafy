import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../../actions/session-actions';

const UsersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const { currentUser } = action;
      return {
        ...state,
        ...{ [currentUser.id]: currentUser }
      };
    case REMOVE_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default UsersReducer;
