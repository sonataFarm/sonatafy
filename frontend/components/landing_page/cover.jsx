import React from 'react';
import { Link } from 'react-router-dom';

const Cover = () => (
  <div className="inner cover">
    <h1 className="cover-heading">Discover great music.</h1>
    <p className="lead">
      A classical recording has a composer and one or more performers, but sometimes with Spotify these details get lost in the shuffle. Thankfully, now there's Sonatify.
    </p>
    <p className="lead">
      <Link
        className="btn btn-lg btn-secondary"
        to="demo">
          Click here
      </Link>
      {/* <Link
        className="btn btn-lg btn-secondary"
        to="demo">
          Click here
      </Link> */}
    </p>
  </div>
);

export default Cover;
