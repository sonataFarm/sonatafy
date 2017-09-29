import APIUtil from '../util/api-util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';

export const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});

export const receiveCurrentTrack = track => ({
  type: RECEIVE_CURRENT_TRACK,
  track
});

export const fetchCurrentTrack = id => (dispatch, getState) => (
  APIUtil.entities.fetchCurrentTrack(id)
    .then(
      // track => receiveCurrentTrack(track)
      track => dispatch(receiveCurrentTrack(track))
    )
);
