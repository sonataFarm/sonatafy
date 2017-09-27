import { RECEIVE_SINGLE_PLAYLIST } from '../../actions/playlist-actions';

const PlaylistReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SINGLE_PLAYLIST:
      return action.payload.playlist;
    default:
      return state;
  }
};

export default PlaylistReducer;
