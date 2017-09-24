import React from 'react';
import { Link } from 'react-router-dom';
import ModalButton from '../shared/modal/modal-button';

const Cover = () => (
  <div className="inner cover">
    <h1 className="cover-heading">Discover great music.</h1>
    <p className="lead">
      A classical recording has a composer and one or more performers, but sometimes with Spotify the details get lost in the shuffle. Thankfully, now there's Sonatify.
    </p>
    <p className="lead">
      {/* <Link
        className="btn btn-lg btn-default"
        to="demo">
          Guest Demo
      </Link> */}
      <ModalButton
        text="Guest Demo"
        modalId="guest-demo-modal"
        // todo: give modal button same styling as "btn btn-lg btn-default"
      />
    </p>
  </div>
);

export default Cover;
