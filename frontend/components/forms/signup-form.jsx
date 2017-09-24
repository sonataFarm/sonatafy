import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SignupForm = props => {
  const { handleSubmit, pristine } = props;

  return (
    <form onSubmit={ handleSubmit }>
      <div className="form-group row">
        <label htmlFor="username">Username:</label>
        <Field
          className="form-control"
          name="username"
          component="input"
          type="text"
          placeholder="Username"
        />
      </div>
      <div  className="form-group row">
        <label htmlFor="password">Password: </label>
        <Field
          className="form-control"
          name="password"
          component="input"
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="form-group row">
        <label htmlFor="email">Email: </label>
        <Field
          className="form-control"
          name="email"
          component="input"
          type="email"
          placeholder="Email"
        />
      </div>
      <button
        className="btn btn-primary btn-form"
        disabled={ pristine }
      >
        Register Now
      </button>
    </form>
  );
};

export default reduxForm({
  form: 'signup'
})(SignupForm);
