import { RECEIVE_TRACKS } from '../../actions/track-actions';
import { REMOVE_CURRENT_USER } from '../../actions/session-actions';
import { RECEIVE_SINGLE_PLAYLIST } from '../../actions/playlist-actions';

const TracksReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TRACKS:
      return {
        ...state,
        ...action.tracks
      };

    case RECEIVE_SINGLE_PLAYLIST:
      return {
        ...state,
        ...action.payload.tracks
      }

    case REMOVE_CURRENT_USER:
      return {};

    default:
      return state;
  }
}

export default TracksReducer;
