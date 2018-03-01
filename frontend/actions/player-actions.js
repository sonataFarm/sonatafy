import { fetchCurrentTrack } from './track-actions';

export const
  PLAY                        = 'PLAY',
  PAUSE                       = 'PAUSE',
  SEEK                        = 'SEEK',
  ENQUEUE_TRACKS              = 'ENQUEUE TRACKS',
  QUEUE_NEXT_TRACK            = 'QUEUE_NEXT_TRACK',
  QUEUE_PREVIOUS_TRACK        = 'QUEUE_PREVIOUS_TRACK',
  RECEIVE_CURRENT_TRACK       = 'RECEIVE_CURRENT_TRACK',
  START_LOADING_CURRENT_TRACK = 'START_LOADING_CURRENT_TRACK',
  ENQUEUE_SINGLE_TRACK        = 'ENQUEUE_SINGLE_TRACK',
  SET_VOLUME                  = 'SET_VOLUME';

export const play = () => ({
  type: PLAY
});

export const setVolume = volume => ({
  type: SET_VOLUME,
  volume
});

export const startLoadingCurrentTrack = () => ({
  type: START_LOADING_CURRENT_TRACK
});

export const pause = () => ({
  type: PAUSE
});

export const enqueueTracks = tracks => ({
  type: ENQUEUE_TRACKS,
  tracks
});

export const enqueueSingleTrack = trackID => ({
  type: ENQUEUE_SINGLE_TRACK,
  trackID
})

export const queueNextTrack = () => ({
  type: QUEUE_NEXT_TRACK
});

export const queuePreviousTrack = () => ({
  type: QUEUE_PREVIOUS_TRACK
});

export const seek = position => ({
  type: SEEK,
  position
});

export const enqueuePlaylist = (playlistID, startIdx) => (dispatch, getState) => {
  // startIdx is zero-indexed
  const playlist = getState().entities.playlists[playlistID];
  const tracks = playlist.tracks.slice(startIdx)
    .concat(playlist.tracks.slice(0, startIdx));

  return Promise.all([
    dispatch(enqueueTracks(tracks)),
    dispatch(fetchCurrentTrack(tracks[0]))
  ]);
};

export const playSingleTrack = trackID => dispatch => (
  Promise.all([
    dispatch(enqueueSingleTrack(trackID)),
    dispatch(fetchCurrentTrack(trackID))
  ])
);

export const playPreviousTrack = () => (dispatch, getState) => {
  let queue = getState().ui.player.queue;
  return Promise.all([
    dispatch(queuePreviousTrack()),
    dispatch(fetchCurrentTrack(queue[queue.length - 1]))
  ]);
};

export const playNextTrack = () => (dispatch, getState) => {
  let queue = getState().ui.player.queue;
  let id = queue[1] || getState().ui.player.currentTrack.id;

  return Promise.all([
    dispatch(fetchCurrentTrack(id)),
    dispatch(queueNextTrack())
  ]);
};
