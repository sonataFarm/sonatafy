import { RECEIVE_COMPOSERS } from '../../actions/composer-actions';
import { REMOVE_CURRENT_USER } from '../../actions/session-actions';
import { RECEIVE_SINGLE_PLAYLIST } from '../../actions/playlist-actions';

const ComposersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_COMPOSERS:
      return {
        ...state,
        ...action.composers
      };

    case RECEIVE_SINGLE_PLAYLIST:
      return {
        ...state,
        ...action.payload.composers
      }

    case REMOVE_CURRENT_USER:
      return {};

    default:
      return state;
  }
}

export default ComposersReducer;
