import { RECEIVE_FOLLOW, RECEIVE_UNFOLLOW } from '../../actions/follow-actions';

const FollowedUsersReducer = (state = [], action) => {
  switch (action.type) {

    case RECEIVE_FOLLOW:
      return [
        ...state,
        action.id
      ];

    case RECEIVE_UNFOLLOW:
      return state.filter(id => id !== action.id)

    default:
      return state;
  }
}

export default FollowedUsersReducer;
