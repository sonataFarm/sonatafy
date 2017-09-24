import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = props => {
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
      <div className="form-group row">
        <label htmlFor="password">Password:</label>
        <Field
          className="form-control"
          name="password"
          component="input"
          type="password"
          placeholder="Password"
        />
      </div>
      <button
        className="btn btn-primary btn-form"
        disabled={ pristine }
      >
        Sign In
      </button>
    </form>
  );
}

export default reduxForm({
  form: 'login'
})(LoginForm);
