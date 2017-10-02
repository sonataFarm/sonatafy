import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../../actions/session-actions';
import { RECEIVE_NEW_PLAYLIST } from '../../actions/playlist-actions';
import { RECEIVE_FOLLOWED_USERS, RECEIVE_SINGLE_USER } from '../../actions/user-actions';

const UsersReducer = (state = {}, action) => {
  switch (action.type) {

    case RECEIVE_CURRENT_USER:
      const { currentUser } = action;
      return {
        ...state,
        ...{ [currentUser.id]: currentUser }
      };

    case RECEIVE_FOLLOWED_USERS:
      const { followedUsers } = action;
      return {
        ...state,
        ...followedUsers
      }

    case RECEIVE_SINGLE_USER:
      const { user } = action;
      return {
        ...state,
        ...user
      };

    case RECEIVE_NEW_PLAYLIST:
      const playlist_id = Object.keys(action.playlist)[0];
      const user_id = action.playlist[playlist_id].author_id;

      return {
        ...state,
        [user_id]: {
          ...state[user_id],
          playlists: [
            ...state[user_id].playlists,
            playlist_id
          ]
        }
      };

    case REMOVE_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default UsersReducer;
