import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => (
  <nav>
    <ul className="nav masthead-nav">
      <li><Link to="signup">Sign Up</Link></li>
      <li><Link to="login">Log In</Link></li>
    </ul>
  </nav>
);

export default Menu;
