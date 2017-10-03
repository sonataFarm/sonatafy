import { connect } from 'react-redux';
import TrackList from './track-list';
import { enqueuePlaylist } from '../../actions/player-actions';
import { removeTrackFromPlaylist } from '../../actions/playlist-actions';

const mapStateToProps = (state, ownProps) => ({
  currentTrack: state.ui.player.currentTrack,
  trackListBelongsToCurrentUser: state.session.currentUser.id === ownProps.playlist.author_id
});

const mapDispatchToProps = dispatch => ({
  enqueuePlaylist: (playlist, startIdx) =>
    dispatch(enqueuePlaylist(playlist, startIdx)),
  removeTrackFromPlaylist: (playlistID, ord) =>
    dispatch(removeTrackFromPlaylist(playlistID, ord))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);
