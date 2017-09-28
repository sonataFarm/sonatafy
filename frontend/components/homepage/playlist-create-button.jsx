import React from 'react';
import ModalButton from '../shared/modal-button';


const buttonText =
  <div>
    <i className="fa fa-plus-circle" aria-hidden="true"></i>
     {' '}New Playlist
 </div>
const PlaylistCreateButton = () => (
  <div className="playlist-create-container">
    <ModalButton
      text={buttonText}
      modalId="playlist-create-modal"
    />
  </div>
)

export default PlaylistCreateButton;
