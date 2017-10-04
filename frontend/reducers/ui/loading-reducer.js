import {
  TOGGLE_LOADING_THROTTLE,
} from '../../actions/loading-actions';

import {
  RECEIVE_SINGLE_PLAYLIST,
  START_LOADING_SINGLE_PLAYLIST,
  RECEIVE_PLAYLISTS
} from '../../actions/playlist-actions';

import {
  START_LOADING_SINGLE_USER,
  RECEIVE_SINGLE_USER,
  START_LOADING_USERS_INDEX_ITEMS,
  RECEIVE_USERS_INDEX_ITEMS
} from '../../actions/user-actions';

const initialState = {
  playlistDetailLoading: true,
  currentUserPlaylistsLoading: true,
  userDetailLoading: true,
  throttle: true,
  usersIndexLoading: true
};

const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING_USERS_INDEX_ITEMS:
      return Object.assign({}, state, { usersIndexLoading: true });
    case RECEIVE_USERS_INDEX_ITEMS:
      return Object.assign({}, state, { usersIndexLoading: false });
    case TOGGLE_LOADING_THROTTLE:
      return Object.assign({}, state, { throttle: !state.throttle })
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
