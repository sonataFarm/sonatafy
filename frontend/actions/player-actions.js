import { fetchCurrentTrack } from './track-actions';

export const PAUSE = 'PAUSE';
export const SEEK = 'SEEK';
export const PLAY = 'PLAY';
export const ENQUEUE_TRACKS = 'ENQUEUE TRACKS';
export const QUEUE_NEXT_TRACK = 'QUEUE_NEXT_TRACK';
export const QUEUE_PREVIOUS_TRACK = 'QUEUE_PREVIOUS_TRACK';
export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';
export const START_LOADING_CURRENT_TRACK = 'START_LOADING_CURRENT_TRACK';
export const ENQUEUE_SINGLE_TRACK = 'ENQUEUE_SINGLE_TRACK';

export const play = () => ({
  type: PLAY
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

  dispatch(enqueueTracks(tracks));
  dispatch(fetchCurrentTrack(tracks[0]))
};

export const playSingleTrack = trackID => dispatch => {
  dispatch(enqueueSingleTrack(trackID));
  dispatch(fetchCurrentTrack(trackID));
}

export const playPreviousTrack = () => (dispatch, getState) => {
  let queue = getState().ui.player.queue;
  dispatch(queuePreviousTrack());
dispatch(fetchCurrentTrack(queue[queue.length - 1]));
};

export const playNextTrack = () => (dispatch, getState) => {
  let queue = getState().ui.player.queue;
  let id = queue[1] || getState().ui.player.currentTrack.id;
  dispatch(fetchCurrentTrack(id));
  dispatch(queueNextTrack());
};
