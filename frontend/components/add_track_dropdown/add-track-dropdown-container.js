import { connect } from 'react-redux';
import AddTrackDropdown from './add-track-dropdown';
import { selectUserPlaylists } from '../../selectors/selectors';
import { addTrackToPlaylist } from '../../actions/playlist-actions';

// playlists
// addTrackToPlaylist

const mapStateToProps = state => ({
  playlists: selectUserPlaylists(state, state.session.currentUser.id)
})

const mapDispatchToProps = dispatch => ({
  addTrackToPlaylist: (playlistID, trackID) =>
    dispatch(addTrackToPlaylist(playlistID, trackID))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTrackDropdown);
