import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { configureStore } from './store/store';
import PlaylistsReducer from './reducers/entities/playlists-reducer';

// !!!testing
import { login } from './actions/session-actions';
import * as actions from './actions/playlist-actions';
import { selectPlaylistsByUserID } from './selectors/selectors';
// !!!

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState;
  if (window.prefetchedData) {
    preloadedState = {
      session: { currentUser: window.prefetchedData.currentUser },
      entities: {
        users: { ...window.prefetchedData.currentUser },
        playlists: { ...window.prefetchedData.playlists }
      }
    }
  } else {
    preloadedState = {};
  }

  const store = configureStore(preloadedState);

  // !!!testing
  window.store = store;
  window.login = login;
  window.PlaylistsReducer = PlaylistsReducer;
  window.actions = actions;
  window.selectPlaylistsByUserID = selectPlaylistsByUserID;
  // !!!

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
