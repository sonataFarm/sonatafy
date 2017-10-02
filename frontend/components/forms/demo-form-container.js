import { connect } from 'react-redux';
import DemoForm from './demo-form';
import { login } from '../../actions/session-actions';

const DEMO_USER = {
  username: 'wolfiemoz',
  password: 'sonata'
};

const mapDispatchToProps = dispatch => ({
  handleSubmit: () => dispatch(login(DEMO_USER))
});

export default connect(null, mapDispatchToProps)(DemoForm);
