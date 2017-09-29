import React from 'react';
import Avatar from '../shared/avatar';
import DropdownMenu from '../shared/dropdown-menu';

const VisitorNav = ({ visitor, logout }) => {

  return (
    <div className="visitor-nav-container">
      <Avatar email={ visitor.email } />
      <span>{ visitor.username }</span>
      <DropdownMenu
        logout={ logout }
      />
    </div>
  )
};

export default VisitorNav;
