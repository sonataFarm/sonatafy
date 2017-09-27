import { combineReducers } from 'redux';
import demo from './demo-reducer';
import loading from './loading-reducer';

export default combineReducers({
  demo,
  loading
});
