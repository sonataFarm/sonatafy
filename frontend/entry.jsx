import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { configureStore } from './store/store';

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
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
