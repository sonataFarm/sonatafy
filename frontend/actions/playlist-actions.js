import { receiveTracks } from './track-actions';
import APIUtil from '../util/api-util';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';

export const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists
});

export const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  playlist
})

export const removePlaylist = id => ({
  type: REMOVE_PLAYLIST,
  id
})

export const receivePlaylistDetails = data => dispatch => {
  // data is { playlist: {...}, tracks: {...} }
  dispatch(receivePlaylist(data.playlist));
  dispatch(receiveTracks(data.tracks));
};

export const createPlaylist = playlist => dispatch => (
  APIUtil.entities.createPlaylist(playlist)
    .then(
      playlist => dispatch(receivePlaylistDetails(playlist))
    )
);

export const destroyPlaylist = id => dispatch => (
  APIUtil.entities.destroyPlaylist(id)
    .then(
      () => dispatch(removePlaylist(id))
    )
);
