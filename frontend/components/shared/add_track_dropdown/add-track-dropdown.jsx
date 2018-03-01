import React from 'react';
import DropdownMenu from 'react-dd-menu';
import AddTrackDropdownItem from './add-track-dropdown-item';

class AddTrackDropdown extends React.Component {
  // form to add track to playlist
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }

    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
  }

  toggle(e) {
    e.stopPropagation();
    this.setState({ open: !this.state.open });
  }

  close() {
    this.setState({ open: false });
  }

  render() {

    const menuTrigger = (
      <div onClick={this.toggle}>
        <i className="fa fa-plus-circle fa-lg"></i>
      </div>
    );

    const playlistItems = this.props.playlists.map(
      playlist => <AddTrackDropdownItem
        key={playlist.id}
        playlist={playlist}
        track={this.props.track}
        addTrackToPlaylist={this.props.addTrackToPlaylist}
        toggleMenuOpen={this.toggle} />
    );

    const options = {
      isOpen: this.state.open,
      close: this.close,
      toggle: menuTrigger,
      align: 'right',
      inverse: true,
      animate: true,
      enterTimeout: 350,
      closeOnOutsideClick: true
    };

    return (
      <div className="add-track-dropdown-container">
        <DropdownMenu { ...options }>
          <li className="title">Select Playlist</li>
          {playlistItems}
        </DropdownMenu>
      </div>
    );
  }
}

export default AddTrackDropdown;
