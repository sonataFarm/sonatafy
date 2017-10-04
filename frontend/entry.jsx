import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { configureStore } from './store/store';
import PlaylistsReducer from './reducers/entities/playlists-reducer';
// !!!testing
import { fetchUsersIndexItems } from './actions/user-actions';
import { selectUsersIndexItems } from './selectors/selectors';
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
          userDetailLoading: true,
          usersIndexLoading: true
        }
      }
    }
  } else {
    preloadedState = {};
  }

  const store = configureStore(preloadedState);

  // !!!testing
  window.store = store;
  window.APIUtil = APIUtil;
  window.fetchUsersIndexItems = fetchUsersIndexItems;
  window.selectUsersIndexItems = selectUsersIndexItems;
  // !!!

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
