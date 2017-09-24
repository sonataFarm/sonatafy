import { connect } from 'react-redux';
import LoginForm from './login-form';
import { login } from '../../actions/session-actions';

const mapDispatchToProps = ({
  onSubmit: user => dispatch(login(user))
});

export default connect(null, mapDispatchToProps)(LoginForm);
