import { RECEIVE_ALBUMS } from '../../actions/album-actions';
import { REMOVE_CURRENT_USER } from '../../actions/session-actions';
import { RECEIVE_SINGLE_PLAYLIST } from '../../actions/playlist-actions';

const AlbumsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALBUMS:
      return {
        ...state,
        ...action.albums
      };

    case RECEIVE_SINGLE_PLAYLIST:
      return {
        ...state,
        ...action.albums
      };

    case REMOVE_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default AlbumsReducer;
