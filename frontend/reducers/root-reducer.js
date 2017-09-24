import { combineReducers } from 'redux';
import session from './session-reducer';
import ui from './ui/ui-reducer';
import errors from './errors/errors-reducer';
import { reducer as form } from 'redux-form';

export default combineReducers({
  session,
  ui,
  errors,
  form
});
