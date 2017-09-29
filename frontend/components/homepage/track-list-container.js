import { connect } from 'react-redux';
import TrackList from './track-list';
import { enqueuePlaylist } from '../../actions/queue-actions';

const mapDispatchToProps = dispatch => ({
  enqueuePlaylist: (playlist, startIdx) =>
    dispatch(enqueuePlaylist(playlist, startIdx))
});

export default connect(null, mapDispatchToProps)(TrackList);
