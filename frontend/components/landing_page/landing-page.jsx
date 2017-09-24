import React from 'react';
import Masthead from './masthead';
import Cover from './cover';
import Mastfoot from './mastfoot';

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
  </div>
);

export default LandingPage;
