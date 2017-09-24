import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleDemoAnimation } from '../../actions/ui-actions';
import ModalButton from '../shared/modal/modal-button';

const Cover = ({ handleClick }) => (
  <div className="inner cover">
    <h1 className="cover-heading">Discover great music.</h1>
    <p className="lead">
      Discover a new masterpiece. Make an old playlist. Share it all with your friends. 
    </p>
    <p className="lead">
      {/* <Link
        className="btn btn-lg btn-default"
        to="demo">
          Guest Demo
      </Link> */}
      <button
        className="btn btn-lg btn-default"
        onClick={ handleClick }
      >Guest Demo</button>
    </p>
  </div>
);

const mapDispatchToProps = dispatch => ({
  handleClick: () => {
    $('#guest-demo-modal').modal('show');
    dispatch(toggleDemoAnimation());
  }
});

export default connect(null, mapDispatchToProps)(Cover);
