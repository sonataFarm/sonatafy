import React from 'react';
import MenuListItem from './menu-list-item';

const MenuList = () => (
  <div>
    <MenuListItem text="Explore" to={'explore'} />
    <MenuListItem text="Radio"   to={'explore'} />
    <MenuListItem text="Log Out" to={'logout'}  />
  </div>
);

export default MenuList;
