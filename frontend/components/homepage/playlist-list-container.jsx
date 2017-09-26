import { connect } from 'react-redux';
import PlaylistList from './playlist-list';
import { selectPlaylistsByUserID } from '../../selectors/selectors';

const mapStateToProps = state => ({
  playlists: selectPlaylistsByUserID(state, state.session.currentUser.id)
});

export default connect(mapStateToProps)(PlaylistList);
