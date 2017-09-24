import React from 'react';
import { spring, TransitionMotion } from 'react-motion';
import Masthead from './masthead';
import Cover from './cover';
import Mastfoot from './mastfoot';
import LandingPageModals from '../modals/landing-page-modals';

const LandingPage = () => (
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

const willLeave = () => ({
  background: white,
  opacity: 0
})

const springSettings = {
  stiffness: 40,
  damping: 30
}

export const AnimatedLandingPage = () => (
  <TransitionMotion
    defaultStyles={[
      { key: 'background', style: {opacity: 0}},
    ]}
    styles={[
      { key: 'background', style: { opacity: spring(1, springSettings), }, data: <LandingPage /> },
    ]}
    willLeave={willLeave}
  >
    {styles => (
      <div>
        { styles.map(({ key, style, data}) => (
          <div
            key={key}
            style={{
            ...style
          }}>{ data }</div>
        ))}
      </div>
    )}
  </TransitionMotion>
)
