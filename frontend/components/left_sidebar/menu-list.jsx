import React from 'react';
import MenuListItem from './menu-list-item';

const MenuList = ({ logout }) => (
  <div>
    <MenuListItem text="Home" to={'/'} />
    <MenuListItem text="Explore"   to={'/users'} />
    <a className="menu-list-item list-group-item list-group-item-action"
      onClick={ logout }>Log Out</a>
  </div>
);

export default MenuList;
