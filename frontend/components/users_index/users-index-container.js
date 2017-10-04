import { connect } from 'react-redux';
import UsersIndex from './users-index';
import { selectUsers } from '../../selectors/selectors';
import { fetchUsersIndexItems } from '../../actions/user-actions';

const mapStateToProps = state => ({
  items: selectUsersIndexItems(state),
  loading: state.ui.loading.usersIndexLoading || state.ui.loading.throttle,
  allUsersLoaded: state.ui.usersIndex.allUsersLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchUsersIndexItems: () => dispatch(fetchUsersIndexItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersIndex)
