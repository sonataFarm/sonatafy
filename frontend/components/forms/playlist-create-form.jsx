import React from 'react';
import { Field, reduxForm } from 'redux-form';

const PlaylistCreateForm = props => {
  const { handleSubmit, pristine } = props;

  return (
    <form onSubmit={ handleSubmit }>
      <div className="form-group row">
        <label htmlFor="title">Title:</label>
        <Field
          className="form-control"
          name="title"
          component="input"
          type="text"
          placeholder="Title"
        />
      </div>
      <button
        type="submit"
        className="btn btn-default"
        disabled={ pristine }
      >
        Create Playlist
    </button>
  </form>
  )
}

export default reduxForm({
  form: 'playlistCreate'
})(PlaylistCreateForm);
