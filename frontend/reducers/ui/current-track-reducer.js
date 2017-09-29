import { PLAY, PAUSE, ENQUEUE_TRACKS, START_LOADING_CURRENT_TRACK, RECEIVE_CURRENT_TRACK } from '../../actions/player-actions';

const CurrentTrackReducer = (state = {}, action) => {
  switch (action.type) {
    case PLAY:
      return {
        ...state,
        status: 'PLAYING'
      };
    case PAUSE:
      return {
        ...state,
        status: 'PAUSED'
      };

    case RECEIVE_CURRENT_TRACK:
      return {
        ...action.track,
        seek: 0,
        status: 'PLAYING',
      };

    case START_LOADING_CURRENT_TRACK:
      return {
        ...state,
        status: 'LOADING'
      };

    default:
      return state;
  }
}

export default CurrentTrackReducer;
