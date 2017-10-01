import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { configureStore } from './store/store';
import PlaylistsReducer from './reducers/entities/playlists-reducer';

// !!!testing
import { login } from './actions/session-actions';
import { fetchSinglePlaylist } from './actions/playlist-actions';
import { selectPlaylistTracks, selectUser, selectPlaylistDetails } from './selectors/selectors';
import { fetchCurrentTrack } from './actions/track-actions';
// !!!

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState;
  if (window.prefetchedData) {
    const { currentUser, playlists } = window.prefetchedData;
    preloadedState = {
      session: { currentUser },
      entities: {
        users: { ...{ [currentUser.id]: currentUser } },
        playlists
      },
      ui: {
        loading: {
          currentUserPlaylistsLoading: false,
          playlistDetailLoading: true
        }
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
  window.selectPlaylistTracks = selectPlaylistTracks;
  window.selectUser = selectUser;
  window.fetchSinglePlaylist = fetchSinglePlaylist;
  window.selectPlaylistDetails = selectPlaylistDetails;
  window.fetchCurrentTrack = fetchCurrentTrack;
  // !!!

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
