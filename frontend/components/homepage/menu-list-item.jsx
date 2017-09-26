import React from 'react';
import { Link } from 'react-router-dom';

const MenuListItem = ({ text, to }) => (
  <div>
    <Link to={to}>{text}</Link>
  </div>
);

export default MenuListItem;
