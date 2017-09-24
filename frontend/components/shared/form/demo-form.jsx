import React from 'react';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import { toggleDemoAnimation } from '../../../actions/ui-actions';


const KEYSTROKE_DELAY = 130;

class DemoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.username = 'wolfiemoz';
    this.password = 'symphonie';

    this.animate = this.animate.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.animating) {
      setTimeout(this.animate, 500);
    } else {
      clearTimeout(this.timeout);
    }
  }

  animate() {
    if (this.username) {
      this.updateField('username');
      this.timeout = setTimeout(this.animate, KEYSTROKE_DELAY);
    } else if (this.password) {
      this.updateField('password');
      this.timeout = setTimeout(this.animate, KEYSTROKE_DELAY);
    } else {
      toggleDemoAnimation();
      console.log(this.state);
      // this.props.handleSubmit(this.state);
    }
  }

  updateField(field) {
    const nextLetter = this[field][0];
    this[field] = this[field].slice(1);

    this.setState(
      prevState => ({ [field]: (prevState[field] + nextLetter) })
    );
  }

  render() {
    debugger;
    return (
      <form onSubmit={ this.handleSubmit }>
        <div className="form-group row">
          <label htmlFor="username">Username:</label>
          {/* <input
            class="form-control"
            name="username"
            type="text"
            value={'gay'}
          /> */}
          <Field
            className="form-control"
            name="username"
            component="input"
            type="text"
            placeholder="Username"
            value={this.state.username}
          />
        </div>
        <div className="form-group row">
          <label htmlFor="password">Password:</label>
          <Field
            className="form-control"
            name="password"
            component="input"
            type="password"
            placeholder="Password"
            value={this.state.password}
          />
          {/* <input
            class="muyclass"
            name="password"
            type="password"
            value={this.state.password}
          /> */}
        </div>
        <button
          className="btn btn-primary"
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
