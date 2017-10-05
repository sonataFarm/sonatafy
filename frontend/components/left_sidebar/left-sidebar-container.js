import { connect } from 'react-redux';
import LeftSidebar from './left-sidebar';
import { logout } from '../../actions/session-actions';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(LeftSidebar);
