import { RECEIVE_TRACKS } from '../../actions/track-actions';
import { REMOVE_CURRENT_USER } from '../../actions/session-actions';

const TracksReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TRACKS:
      return {
        ...state,
        ...action.tracks
      };

    case REMOVE_CURRENT_USER:
      return {};

    default:
      return state;
  }
}

export default TracksReducer;
