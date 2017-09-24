import React from 'react';
import Masthead from './masthead';
import Cover from './cover';
import Mastfoot from './mastfoot';
import LandingPageModals from './modals/landing-page-modals';

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
    <LandingPageModals />
  </div>
);

export default LandingPage;
