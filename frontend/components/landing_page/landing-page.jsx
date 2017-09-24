import React from 'react';
import Masthead from './masthead';
import Cover from './cover';
import Mastfoot from './mastfoot';
import {
  GuestDemoModal,
  LoginModal,
  SignupModal
} from './modals/landing-page-modals';

const LandingPage = props => (
  <div className="landing">
    <div className="site-wrapper">
      <div className="site-wrapper-inner">
        <div className="cover-container">
          <Masthead />
          <Cover />
          <Mastfoot />
        </div>
      </div>
    </div>
    <GuestDemoModal />
  </div>
);

export default LandingPage;
