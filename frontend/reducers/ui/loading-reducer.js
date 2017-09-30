import {
  RECEIVE_SINGLE_PLAYLIST,
  START_LOADING_SINGLE_PLAYLIST
} from '../../actions/playlist-actions';

const initialState = {
  playlistDetailLoading: true
};

const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING_SINGLE_PLAYLIST:
      return Object.assign({}, state, { playlistDetailLoading: true });
    case RECEIVE_SINGLE_PLAYLIST:
      return Object.assign({}, state, { playlistDetailLoading: false });
    default:
      return state;
  }
}

export default LoadingReducer;
