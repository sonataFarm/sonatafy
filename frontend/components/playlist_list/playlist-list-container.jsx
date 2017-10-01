import { connect } from 'react-redux';
import PlaylistList from './playlist-list';
import { selectUserPlaylists } from '../../selectors/selectors';

const mapStateToProps = state => ({
  playlists: selectUserPlaylists(state, state.session.currentUser.id),
  loading: state.ui.loading.currentUserPlaylistsLoading
});

export default connect(mapStateToProps)(PlaylistList);
