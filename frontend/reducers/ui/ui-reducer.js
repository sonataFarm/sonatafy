import { combineReducers } from 'redux';
import demo from './demo-reducer';
import loading from './loading-reducer';
import player from './player-reducer';
import usersIndex from './users-index-reducer';

export default combineReducers({
  demo,
  loading,
  player,
  usersIndex
});
