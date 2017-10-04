import { connect } from 'react-redux';
import UserDetail from './user-detail';
import { selectUserPlaylists } from '../../selectors/selectors';
import { fetchSingleUser, createFollow, destroyFollow } from '../../actions/user-actions';


const mapStateToProps = (state, ownProps) => {
  const userID = ownProps.match.params.userID || state.session.currentUser.id;

  return {
    loading: state.ui.loading.userDetailLoading || state.ui.loading.throttle,
    playlists: selectUserPlaylists(state, userID),
    user: state.entities.users[userID],
    currentUser: state.session.currentUser
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchSingleUser: id => dispatch(fetchSingleUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
