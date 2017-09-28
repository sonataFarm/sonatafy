import { RECEIVE_SINGLE_PLAYLIST, RECEIVE_NEW_PLAYLIST } from '../../actions/playlist-actions';

const PlaylistReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SINGLE_PLAYLIST:
      return action.payload.playlist;
    case RECEIVE_NEW_PLAYLIST:
      return action.playlist;
    default:
      return state;
  }
};

export default PlaylistReducer;
