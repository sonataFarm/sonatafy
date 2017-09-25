import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { configureStore } from './store/store';
import PlaylistsReducer from './reducers/entities/playlists-reducer';

// !!!testing
import { login } from './actions/session-actions';
// !!!

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // !!!testing
  window.store = store;
  window.login = login;
  window.PlaylistsReducer = PlaylistsReducer;
  // !!!

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
