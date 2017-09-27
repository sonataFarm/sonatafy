import PlaylistReducer from './playlist-reducer';

import {
  RECEIVE_PLAYLISTS,
  RECEIVE_SINGLE_PLAYLIST,
  REMOVE_PLAYLIST
 } from '../../actions/playlist-actions';

 import {
   REMOVE_CURRENT_USER
 } from '../../actions/session-actions';

const PlaylistsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return {
        ...state,
        ...action.playlists
      };

    case RECEIVE_SINGLE_PLAYLIST:
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

    case REMOVE_CURRENT_USER:
      return {};

    default:
      return state;
  }
}
export default PlaylistsReducer;
