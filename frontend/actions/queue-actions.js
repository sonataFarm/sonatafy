export const ENQUEUE_TRACKS = 'ENQUEUE TRACKS';
import { play } from './player-actions';
import { fetchCurrentTrack } from './track-actions';

export const enqueueTracks = tracks => ({
  type: ENQUEUE_TRACKS,
  tracks
});

export const enqueuePlaylist = (playlistID, startIdx) => (dispatch, getState) => {
  // startIdx is zero-indexed
  const playlist = getState().entities.playlists[playlistID];
  const tracks = playlist.tracks.slice(startIdx)
    .concat(playlist.tracks.slice(0, startIdx));

  dispatch(enqueueTracks(tracks));
  dispatch(fetchCurrentTrack(tracks[0]))
};
