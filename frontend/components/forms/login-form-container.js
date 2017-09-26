import { connect } from 'react-redux';
import LoginForm from './login-form';
import { login } from '../../actions/session-actions';

const mapDispatchToProps = dispatch => ({
  onSubmit: user => {
    $('#login-modal').modal('toggle');
    dispatch(login(user));
  }
});

export default connect(null, mapDispatchToProps)(LoginForm);
