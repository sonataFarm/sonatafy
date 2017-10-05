import React from 'react';
import LeftSidebarContainer from '../left_sidebar/left-sidebar-container';
import MainContent from './main-content';
import RightSidebarContainer from '../right_sidebar/right-sidebar-container';
import PlayerContainer from '../player/player-container';
import { Route } from 'react-router-dom';
import HomepageModals from '../modals/homepage-modals';

const Homepage = props => {
  return (
    <div className="container-fluid homepage">
      <div className="main-area content">
        <div className="content-area left-sidebar-container"><LeftSidebarContainer /></div>
        <div className="content-area col-9 col-md-8">
            <MainContent />
        </div>
        <div className="content-area col right-sidebar-container">
          <RightSidebarContainer />
        </div>
      </div>
      <PlayerContainer />
      <HomepageModals />
    </div>
  );
};

export default Homepage;
