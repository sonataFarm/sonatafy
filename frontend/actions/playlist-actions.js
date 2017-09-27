import { receiveTracks } from './track-actions';
import { receiveComposers } from './composer-actions';
import { receivePerformers } from './performer-actions';
import { receiveAlbums } from './album-actions';

import APIUtil from '../util/api-util';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_SINGLE_PLAYLIST = 'RECEIVE_SINGLE_PLAYLIST';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';
export const START_LOADING_SINGLE_PLAYLIST = 'START_LOADING_SINGLE_PLAYLIST';

export const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists
});

export const receiveSinglePlaylist = payload => ({
  type: RECEIVE_SINGLE_PLAYLIST,
  payload
})

export const removePlaylist = id => ({
  type: REMOVE_PLAYLIST,
  id
});

export const startLoadingSinglePlaylist = () => ({
  type: START_LOADING_SINGLE_PLAYLIST
});

export const fetchSinglePlaylist = id => dispatch => {
  dispatch(startLoadingSinglePlaylist());
  return APIUtil.entities.fetchSinglePlaylist(id)
    .then(
      data => dispatch(receiveSinglePlaylist(data))
    )
};

export const createPlaylist = playlist => dispatch => (
  APIUtil.entities.createPlaylist(playlist)
    .then(
      playlist => dispatch(receiveSinglePlaylist(playlist))
    )
);

export const destroyPlaylist = id => dispatch => (
  APIUtil.entities.destroyPlaylist(id)
    .then(
      () => dispatch(removePlaylist(id))
    )
);
