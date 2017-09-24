import { connect } from 'react-redux';
import SignupForm from './signup-form';
import { signup } from '../../../actions/session-actions';

const mapDispatchToProps = dispatch => ({
  onSubmit: user => dispatch(signup(user))
});

export default connect(null, mapDispatchToProps)(SignupForm);
