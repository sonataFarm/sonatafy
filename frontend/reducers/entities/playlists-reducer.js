import { RECEIVE_PLAYLISTS } from '../../actions/playlist-actions';

const PlaylistsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return {
        ...state,
        ...action.playlists
      };
    default:
      return state;
  }
}
export default PlaylistsReducer;
