import APIUtil from '../util/api-util';

export const
  RECEIVE_ALBUMS = "RECEIVE_ALBUMS",
  RECEIVE_ALBUM  = "RECEIVE_ALBUM";

export const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums
});

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

export const fetchAlbum = id => dispatch => (
  APIUtil.entities.fetchAlbum(id)
  .then(
    album => dispatch(receiveAlbum(album)),
    errors => dispatch(receiveErrors(errors))
  )
);
