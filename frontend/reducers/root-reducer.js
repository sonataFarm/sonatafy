import { combineReducers } from 'redux';
import entities from './entities/entities-reducer';
import session from './session-reducer';
import ui from './ui/ui-reducer';
import errors from './errors/errors-reducer';
import { reducer as form } from 'redux-form';

export default combineReducers({
  entities,
  session,
  ui,
  errors,
  form
});
