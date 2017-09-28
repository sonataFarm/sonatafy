import { connect } from 'react-redux';
import PlaylistCreateForm from './playlist-create-form';
import { createPlaylist } from '../../actions/playlist-actions';

const mapDispatchToProps = dispatch => ({
  onSubmit: playlist => {
    $('#playlist-create-modal').modal('toggle');
    dispatch(createPlaylist(playlist));
  }
});

export default connect(null, mapDispatchToProps)(PlaylistCreateForm);
