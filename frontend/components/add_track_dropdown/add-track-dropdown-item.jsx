import React from 'react';

const AddTrackDropdownItem = ({ track, playlist, addTrackToPlaylist, toggleMenuOpen}) => {

  const handleClick = e => {
    debugger;
    e.stopPropagation();
    addTrackToPlaylist(playlist.id, track.id);
    toggleMenuOpen(e);
  };

  return (
    <li>
      <button type="button" onClick={ handleClick } style={{cursor: 'pointer'}}>
        { playlist.title }
      </button>
    </li>
  );
}

export default AddTrackDropdownItem;
