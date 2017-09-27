import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlaylistDetail from './playlist-detail';
import { fetchSinglePlaylist } from '../../actions/playlist-actions';
import { selectPlaylistTracks, selectUser } from '../../selectors/selectors';


const mapStateToProps = (state, { match }) => {
  const playlistID = match.params.playlistID;
  const playlist = selectPlaylistDetails(state, playlistID);
  const tracks = selectPlaylistTracks(state, playlistID);

  return {
    playlist,
    tracks,
    loading: state.ui.loading.playlistDetailLoading
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSinglePlaylist: id => dispatch(fetchSinglePlaylist(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistDetail);
