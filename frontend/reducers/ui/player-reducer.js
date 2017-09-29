import QueueReducer from './queue-reducer';
import CurrentTrackReducer from './current-track-reducer';
0
import { PLAY, PAUSE, QUEUE_PREVIOUS_TRACK, QUEUE_NEXT_TRACK } from '../../actions/player-actions';
import { RECEIVE_CURRENT_TRACK } from '../../actions/track-actions';
import { ENQUEUE_TRACKS } from '../../actions/queue-actions';

// state = {
//   queue: [3, 4, 5, 1, 2],
//   currentTrack: {
//     id: 3,
//     seek: 0
//     status: 'PLAYING' || 'LOADING' || 'PAUSED' || 'STOPPED'
//   }
// }

const _default = {
  queue: [],
  currentTrack: {}
}

const PlayerReducer = (state = _default, action) => {
  switch (action.type) {
    case PLAY:
      return {
        ...state,
        currentTrack: CurrentTrackReducer(state.currentTrack, action)
      };

    case PAUSE:
      return {
        ...state,
        currentTrack: CurrentTrackReducer(state.currentTrack, action)
      };

    case QUEUE_PREVIOUS_TRACK:
      return {
        ...state,
        queue: QueueReducer(state.queue, action)
      };

    case QUEUE_NEXT_TRACK:
      return {
        ...state,
        queue: QueueReducer(state.queue, action)
      };

    case RECEIVE_CURRENT_TRACK:
      return {
        ...state,
        currentTrack: CurrentTrackReducer(undefined, action)
      };

    case ENQUEUE_TRACKS:
      return {
        queue: QueueReducer(undefined, action),
        currentTrack: CurrentTrackReducer(undefined, action),
      };

    default:
      return state;
  }
}

export default PlayerReducer
