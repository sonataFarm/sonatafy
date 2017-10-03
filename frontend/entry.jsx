import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { configureStore } from './store/store';
import PlaylistsReducer from './reducers/entities/playlists-reducer';

// !!!testing
import { startLoadingSingleUser, receiveSingleUser, fetchSingleUser } from './actions/user-actions';
import { createFollow, destroyFollow } from './actions/follow-actions';
import APIUtil from './util/api-util';
import { addTrackToPlaylist, removeTrackFromPlaylist } from './actions/playlist-actions';
// !!!

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState;
  if (window.prefetchedData) {
    const { currentUser, playlists, followedUsers } = window.prefetchedData;
    preloadedState = {
      session: { currentUser },
      entities: {
        users: {
          ...followedUsers,
          [currentUser.id]: currentUser
         },
        playlists
      },
      ui: {
        loading: {
          currentUserPlaylistsLoading: false,
          playlistDetailLoading: true,
          userDetailLoading: true
        }
      }
    }
  } else {
    preloadedState = {};
  }

  const store = configureStore(preloadedState);

  // !!!testing
  window.store = store;
  window.startLoadingSingleUser = startLoadingSingleUser;
  window.receiveSingleUser = receiveSingleUser;
  window.fetchSingleUser = fetchSingleUser;
  window.APIUtil = APIUtil;
  window.createFollow = createFollow;
  window.destroyFollow = destroyFollow;
  window.addTrackToPlaylist = addTrackToPlaylist;
  window.removeTrackFromPlaylist = removeTrackFromPlaylist;
  // !!!

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
