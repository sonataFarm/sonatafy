import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => (
  <nav>
    <ul className="nav masthead-nav">
      <li>
        <Link
          to="#signup-modal"
          data-toggle="modal"
          data-target="#signup-modal"
        >
          Sign Up
        </Link>
      </li>
      <li>
        <Link
          to="#login-modal"
          data-toggle="modal"
          data-target="#login-modal"
        >
          Log In
        </Link>
      </li>
    </ul>
  </nav>
);

export default Menu;
