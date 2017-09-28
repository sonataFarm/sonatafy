import React from 'react';
import LeftSidebar from './left-sidebar';
import MainContent from './main-content';
import RightSidebar from './right-sidebar';
import { Route } from 'react-router-dom';

const Homepage = props => {
  return (
    <div className="container homepage">
      <div className="row content">
        <div className="content-area col-4 col-md-3"><LeftSidebar /></div>
        <div className="content-area col-8 col-md-6 main-content"><MainContent logout={props.logout}/></div>
        <div className="content-area col"><RightSidebar /></div>
      </div>
    </div>
  )
};

export default Homepage;
