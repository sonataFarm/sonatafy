import React from 'react';
import Modal from '../shared/modal';
import AddTrackFormContainer from '../forms/playlist-create-form-container';

const AddTrackModal = () => (
  <Modal
    id="add-track-modal"
    title="Add Track to Playlist"
    body={<AddTrackFormContainer />}
  />
);

export default AddTrackModal;
