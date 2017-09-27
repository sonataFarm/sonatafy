import { combineReducers } from 'redux';
import albums from './albums-reducer';
import composers from './composers-reducer';
import performers from './performers-reducer';
import playlists from './playlists-reducer';
import tracks from './tracks-reducer';
import users from './users-reducer';

export default combineReducers({
  albums,
  composers,
  performers,
  playlists,
  tracks,
  users
});
