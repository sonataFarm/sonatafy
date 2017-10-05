import React from 'react';
import MenuList from './menu-list';
import PlaylistListContainer from '../playlist_list/playlist-list-container';
import PlaylistCreateButton from './playlist-create-button';

const LeftSidebar = ({ logout }) => (
  <div className="left-sidebar-inner-container">
    <div className="scrollbar scroll-wrapper">
      <h1>Sonatify</h1>
      <MenuList
        logout={logout}
      />
      <PlaylistListContainer />
    </div>
    <PlaylistCreateButton />
  </div>
);

export default LeftSidebar;
