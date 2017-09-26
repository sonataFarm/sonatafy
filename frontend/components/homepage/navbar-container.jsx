import { connect } from 'react-redux';
import { logout } from '../../actions/session-actions';
import Navbar from './navbar';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(Navbar)
