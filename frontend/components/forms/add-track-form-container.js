import { connect } from 'react-redux';
import AddTrackForm from './add-track-form';
import { addTrackToPlaylist } from '../../actions/playlist-actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default withRouter(connect()(PlaylistCreateForm));
