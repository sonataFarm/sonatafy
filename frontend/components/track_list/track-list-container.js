import { connect } from 'react-redux';
import TrackList from './track-list';
import { enqueuePlaylist } from '../../actions/player-actions';

const mapStateToProps = state => ({
  currentTrack: state.ui.player.currentTrack
});

const mapDispatchToProps = dispatch => ({
  enqueuePlaylist: (playlist, startIdx) =>
    dispatch(enqueuePlaylist(playlist, startIdx))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);
