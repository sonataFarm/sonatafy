import React from 'react';
import Modal from '../shared/modal';
import PlaylistCreateFormContainer from '../forms/playlist-create-form-container';

const PlaylistCreateModal = () => (
  <Modal
    id="playlist-create-modal"
    title="Create New Playlist"
    body={<PlaylistCreateFormContainer />}
  />
);

export default PlaylistCreateModal;
