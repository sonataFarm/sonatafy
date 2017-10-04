import PlaylistReducer from './playlist-reducer';

import {
  RECEIVE_PLAYLISTS,
  RECEIVE_SINGLE_PLAYLIST,
  RECEIVE_NEW_PLAYLIST,
  REMOVE_PLAYLIST
 } from '../../actions/playlist-actions';

 import {
   REMOVE_CURRENT_USER
 } from '../../actions/session-actions';

 import { RECEIVE_USERS_INDEX_ITEMS } from '../../actions/user-actions';

const PlaylistsReducer = (state = {}, action) => {
  switch (action.type) {

    case RECEIVE_USERS_INDEX_ITEMS:
      const { playlists } = action.payload;
      return {
        ...state,
        ...playlists
      }
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

    case RECEIVE_NEW_PLAYLIST:
      return {
        ...state,
        ...PlaylistReducer(null, action)
      };

    case REMOVE_PLAYLIST:
      let newState = { ...state };
      delete newState[action.id];
      return newState;

    case REMOVE_CURRENT_USER:
      return {};

    default:
      return state;
  }
}
export default PlaylistsReducer;
