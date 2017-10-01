import React from 'react';
import LeftSidebar from '../left_sidebar/left-sidebar';
import MainContent from './main-content';
import RightSidebar from './right-sidebar';
import PlayerContainer from '../player/player-container';
import { Route } from 'react-router-dom';
import HomepageModals from '../modals/homepage-modals';

const Homepage = props => {
  return (
    <div className="container-fluid homepage">
      <div className="main-area content">
        <div className="content-area col-3 col-md-2 left-sidebar-container"><LeftSidebar /></div>
        <div className="content-area col-9 col-md-8">
            <MainContent logout={props.logout}/>
        </div>
        <div className="content-area col">
          <RightSidebar />
        </div>
      </div>
      <PlayerContainer />
      <HomepageModals />
    </div>
  );
};

export default Homepage;
