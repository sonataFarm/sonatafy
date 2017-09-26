import { connect } from 'react-redux';
import Homepage from './homepage';
import { logout } from '../../actions/session-actions';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(Homepage);
