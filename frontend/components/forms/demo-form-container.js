import { connect } from 'react-redux';
import DemoForm from './demo-form';

const DEMO_USER = {
  username: 'wolfiemoz',
  password: 'sonata'
};

const mapDispatchToProps = dispatch => ({
  handleSubmit: () => dispatch(login(DEMO_USER))
});

export default connect(null, mapDispatchToProps)(DemoForm);
