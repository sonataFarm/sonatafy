import PlaylistReducer from './playlist-reducer';

import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  REMOVE_PLAYLIST
 } from '../../actions/playlist-actions';

const PlaylistsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return {
        ...state,
        ...action.playlists
      };

    case RECEIVE_PLAYLIST:
      return {
        ...state,
        ...PlaylistReducer(null, action)
      };

    case REMOVE_PLAYLIST:
      let newState = {
        ...state
      };
      delete newState[action.id];
      return newState;

    default:
      return state;
  }
}
export default PlaylistsReducer;
