import { Howl } from 'howler';

export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';
export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';
export const PLAY_NEXT_TRACK = 'PLAY_NEXT_TRACK';
export const PLAY_PREVIOUS_TRACK = 'PLAY_PREVIOUS_TRACK';
export const START_LOADING_CURRENT_TRACK = 'START_LOADING_CURRENT_TRACK';

export const play = () => ({
  type: PLAY
});

export const startLoadingCurrentTrack = () => ({
  type: START_LOADING_CURRENT_TRACK
});

export const pause = () => ({
  type: PAUSE
});

export const playNextTrack = () => ({
  type: PLAY_NEXT_TRACK
});

export const playPreviousTrack = () => ({
  type: PLAY_PREVIOUS_TRACK
})

// TODO: pauseCurrentTrack, stopCurrentTrack, playNextTrack, playPreviousTrack
