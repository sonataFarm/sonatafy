import {
  RECEIVE_SINGLE_PLAYLIST,
  START_LOADING_SINGLE_PLAYLIST,
  RECEIVE_PLAYLISTS
} from '../../actions/playlist-actions';

const initialState = {
  playlistDetailLoading: true,
  currentUserPlaylistsLoading: true
};

const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING_SINGLE_PLAYLIST:
    debugger;
      return Object.assign({}, state, { playlistDetailLoading: true });
    case RECEIVE_SINGLE_PLAYLIST:
      return Object.assign({}, state, { playlistDetailLoading: false });
    case RECEIVE_PLAYLISTS:
      return Object.assign({}, state, { currentUserPlaylistsLoading: false });
    default:
      return state;
  }
}

export default LoadingReducer;
