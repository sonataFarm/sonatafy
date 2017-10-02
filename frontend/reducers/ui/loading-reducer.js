import {
  RECEIVE_SINGLE_PLAYLIST,
  START_LOADING_SINGLE_PLAYLIST,
  RECEIVE_PLAYLISTS
} from '../../actions/playlist-actions';

import {
  START_LOADING_SINGLE_USER,
  RECEIVE_SINGLE_USER
} from '../../actions/user-actions';

const initialState = {
  playlistDetailLoading: true,
  currentUserPlaylistsLoading: true,
  userDetailLoading: true
};

const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING_SINGLE_PLAYLIST:
      return Object.assign({}, state, { playlistDetailLoading: true });
    case RECEIVE_SINGLE_PLAYLIST:
      return Object.assign({}, state, { playlistDetailLoading: false });
    case RECEIVE_PLAYLISTS:
      return Object.assign({}, state, { currentUserPlaylistsLoading: false });
    case START_LOADING_SINGLE_USER:
      return Object.assign({}, state, { userDetailLoading: true });
    case RECEIVE_SINGLE_USER:
      return Object.assign({}, state, { userDetailLoading: false });
    default:
      return state;
  }
}

export default LoadingReducer;
