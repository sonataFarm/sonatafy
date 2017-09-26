import React from 'react';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import { toggleDemoAnimation } from '../../actions/ui-actions';

const KEYSTROKE_DELAY = 130;
const DEMO_USERNAME = 'wolfiemoz';
const DEMO_PASSWORD = 'sonata';

class DemoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.username = DEMO_USERNAME;
    this.password = DEMO_PASSWORD;

    this.animate = this.animate.bind(this);
    this.nextFrame = this.nextFrame.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.animating) {
      this.setState({
        username: '',
        password: ''
      });

      this.timeout = setTimeout(this.animate, 500);
    } else {
      clearTimeout(this.timeout);
    }
  }

  handleClick(e) {
    e.preventDefault();
    $('#guest-demo-modal').modal('toggle');
    clearTimeout(this.timeout);
    this.props.handleSubmit();
  }

  animate() {
    if (this.state.username === this.username &&
        this.state.password === this.password) {
      this.props.toggleDemoAnimation();
    } else {
      if (this.state.username !== this.username) {
        this.nextFrame('username');
      } else {
        this.nextFrame('password');
      }
      this.timeout = setTimeout(this.animate, KEYSTROKE_DELAY);
    }
  }

  nextFrame(field) {
    this.setState(
      prevState => ({ [field]: this.username.slice(0, this.state[field].length + 1) })
    );
  }

  render() {
    return (
      <form>
        <div className="form-group row">
          <label htmlFor="username">Username:</label>
          <input
            className="form-control"
            name="username"
            type="text"
            value={this.state.username}
          />
        </div>
        <div className="form-group row">
          <label htmlFor="password">Password:</label>
          <input
            className="form-control"
            name="password"
            type="password"
            value={this.state.password}
          />
        </div>
        <button
          className="btn btn-primary btn-form"
          onClick={this.handleClick.bind(this)}
        >
          Sign In
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  animating: state.ui.demo.animating
});

const mapDispatchToProps = dispatch => ({
  toggleDemoAnimation: () => dispatch(toggleDemoAnimation)
});

export default connect(mapStateToProps, mapDispatchToProps)(DemoForm);
