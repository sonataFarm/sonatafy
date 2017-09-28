import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions/session-actions';
import { RECEIVE_NEW_PLAYLIST } from '../actions/playlist-actions';

const _nullSession = {
  currentUser: null
};

const SessionReducer = (state = _nullSession, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const { currentUser } = action;
      return { currentUser };

  case RECEIVE_NEW_PLAYLIST:
    const playlist_id =
    return {
      currentUser: {
        ...state.currentUser,
        playlists: [
          ...state.currentUser.playlists,
          action.playlist.id
        ]
      }
    };

    case REMOVE_CURRENT_USER:
      return { currentUser: null }
    default:
      return state;
  }
};

export default SessionReducer;
