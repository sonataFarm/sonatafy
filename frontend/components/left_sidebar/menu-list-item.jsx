import React from 'react';
import { Link } from 'react-router-dom';

const MenuListItem = ({ text, to }) => (
    <Link
      className="menu-list-item list-group-item list-group-item-action"
      to={to}>{text}</Link>
);

export default MenuListItem;
