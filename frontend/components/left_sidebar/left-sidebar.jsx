import React from 'react';
import MenuList from './menu-list';
import PlaylistListContainer from '../playlist_list/playlist-list-container';
import PlaylistCreateButton from './playlist-create-button';

const LeftSidebar = () => (
  <div className="left-sidebar-inner-container">
    <div className="scrollbar scroll-wrapper">
      <MenuList />
      <PlaylistListContainer />
    </div>
    <PlaylistCreateButton />
  </div>
);

export default LeftSidebar;
