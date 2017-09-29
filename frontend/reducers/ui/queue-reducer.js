import { ENQUEUE_TRACKS } from '../../actions/queue-actions';

const QueueReducer = (state = [], action) => {
  switch (action.type) {
    case ENQUEUE_TRACKS:
      return action.tracks;
    default:
      return state;
  }
}

export default QueueReducer;
