import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlaylistCreateForm from './playlist-create-form';
import { createPlaylist } from '../../actions/playlist-actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: playlist => {
    $('#playlist-create-modal').modal('toggle');
    dispatch(createPlaylist(playlist))
      .then(action => ownProps.history.push(`/playlists/${Object.keys(action.playlist)[0]}`));
  }
});

export default withRouter(connect(null, mapDispatchToProps)(PlaylistCreateForm));
