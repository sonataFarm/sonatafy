import React from 'react';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import { toggleDemoAnimation } from '../../actions/ui-actions';


const KEYSTROKE_DELAY = 130;

class DemoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.username = 'wolfiemoz';
    this.password = 'symphony';

    this.animate = this.animate.bind(this);
    this.nextFrame = this.nextFrame.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.animating) {

      this.setState({
        username: '',
        password: ''
      });

      setTimeout(this.animate, 500);
    } else {
      clearTimeout(this.timeout);
    }
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

      setTimeout(this.animate, KEYSTROKE_DELAY);
    }
  }





  //   }
  // }
  //   if (this.state.username !== this.username) {
  //     this.updateField('username');
  //     this.timeout = setTimeout(this.animate, KEYSTROKE_DELAY);
  //   } else if (this.state.password !== this.password) {
  //     this.updateField('password');
  //     this.timeout = setTimeout(this.animate, KEYSTROKE_DELAY);
  //   } else {
  //     this.timeout = setTimeout(this.animate, KEYSTROKE_DELAY);
  //     toggleDemoAnimation();
  //     console.log(this.state);
  //     // this.props.handleSubmit(this.state);
  //   }
  // }

  nextFrame(field) {
    this.setState(
      prevState => ({ [field]: this.username.slice(0, this.state[field].length + 1) })
    );
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <div className="form-group row">
          <label htmlFor="username">Username:</label>
          <input
            className="form-control"
            name="username"
            type="text"
            value={this.state.username}
          />
          {/* <Field
            className="form-control"
            name="username"
            component="input"
            type="text"
            placeholder="Username"
            value={this.state.username}
          /> */}
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
