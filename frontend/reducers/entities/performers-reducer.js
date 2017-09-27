import { RECEIVE_PERFORMERS } from '../../actions/performer-actions';
import { REMOVE_CURRENT_USER } from '../../actions/session-actions';
import { RECEIVE_SINGLE_PLAYLIST } from '../../actions/playlist-actions';

const PerformersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PERFORMERS:
      return {
        ...state,
        ...action.performers
      };

    case RECEIVE_SINGLE_PLAYLIST:
      return {
        ...state,
        ...action.payload.performers
      };

    case REMOVE_CURRENT_USER:
      return {};

    default:
      return state;
  }
}

export default PerformersReducer;
