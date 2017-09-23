import { combineReducers } from 'redux';
import session from './session-reducer';
import errors from './errors/errors-reducer';

export default combineReducers({
  session,
  errors
});
