import {
   RECEIVE_SESSION_ERRORS,
   RECEIVE_CURRENT_USER
} from '../../actions/session-actions';

const _nullErrors = [];
const SessionErrorsReducer = (state = _nullErrors, action) => {
  switch (action.type) {

    case RECEIVE_SESSION_ERRORS:
      return action.errors.responseJSON;

    case RECEIVE_CURRENT_USER:
      return _nullErrors;

    default:
      return state;
  }
};

export default SessionErrorsReducer;
