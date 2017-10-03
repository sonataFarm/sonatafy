import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchSinglePlaylist } from '../../actions/playlist-actions';
import { selectPlaylistTracks, selectPlaylistDetails } from '../../selectors/selectors';
import PlaylistDetail from './playlist-detail';

const mapStateToProps = (state, { match }) => {
  const playlistID = match.params.playlistID;
  const playlist = selectPlaylistDetails(state, playlistID);
  const tracks = selectPlaylistTracks(state, playlistID);
  return {
    playlist,
    tracks,
    loading: state.ui.loading.playlistDetailLoading || state.ui.loading.throttle
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSinglePlaylist: id => dispatch(fetchSinglePlaylist(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistDetail);
