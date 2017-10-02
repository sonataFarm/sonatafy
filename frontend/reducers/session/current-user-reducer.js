import FollowedUsersReducer from './followed-users-reducer';

import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../../actions/session-actions';
import { RECEIVE_FOLLOW, RECEIVE_UNFOLLOW } from '../../actions/follow-actions';

const _nullUser = null;

const CurrentUserReducer = (state = _nullUser, action) => {
  switch (action.type) {

    case RECEIVE_CURRENT_USER:
      return action.currentUser;

    case REMOVE_CURRENT_USER:
      return _nullUser;

    case RECEIVE_FOLLOW:
      return {
        ...state,
        followedUsers: FollowedUsersReducer(state.followedUsers, action)
      };

    case RECEIVE_UNFOLLOW:
      return {
        ...state,
        followedUsers: FollowedUsersReducer(state.followedUsers, action)
      };

    default:
      return state;
  }
}

export default CurrentUserReducer;
