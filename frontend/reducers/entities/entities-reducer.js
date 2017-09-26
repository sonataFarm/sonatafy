import { combineReducers } from 'redux';
import playlists from './playlists-reducer';
import tracks from './tracks-reducer';
import users from './users-reducer';

// import albums from 'albums-reducer';
// import composers from 'composers-reducer';
// import performers from 'performers-reducer';

// export default combineReducers({
//   albums,
//   composers,
//   performers,
// });


export default combineReducers({
  playlists,
  tracks,
  users
});
