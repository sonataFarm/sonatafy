import React from 'react';
import MenuList from './menu-list';
import PlaylistListContainer from './playlist-list-container';
import PlaylistCreateButton from './playlist-create-button';

const LeftSidebar = () => (
  <div>
    <MenuList />
    <PlaylistListContainer />
    <PlaylistCreateButton />
  </div>
);

export default LeftSidebar;
