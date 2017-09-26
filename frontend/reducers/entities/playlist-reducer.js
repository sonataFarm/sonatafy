import { RECEIVE_PLAYLIST } from '../../actions/playlist-actions';

const PlaylistReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PLAYLIST:
      return action.playlist;
    default:
      return state;
  }
};

export default PlaylistReducer;
