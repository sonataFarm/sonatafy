import { ENQUEUE_TRACKS } from '../../actions/queue-actions';
import { QUEUE_PREVIOUS_TRACK, QUEUE_NEXT_TRACK } from '../../actions/player-actions';

const QueueReducer = (state = [], action) => {
  switch (action.type) {
    case ENQUEUE_TRACKS:
      return action.tracks;
    case QUEUE_PREVIOUS_TRACK:
      return [
        state.slice(-1),
        ...state.slice(0, -1),
      ];
    case QUEUE_NEXT_TRACK:
      return [
        ...state.slice(1),
        state[0]
      ];
    default:
      return state;
  }
}

export default QueueReducer;
