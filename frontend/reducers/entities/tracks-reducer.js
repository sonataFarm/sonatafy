import { RECEIVE_TRACKS } from '../../actions/track-actions';

const TracksReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TRACKS:
      return {
        ...state,
        ...action.tracks
      };
    default:
      return state;
  }
}

export default TracksReducer;
