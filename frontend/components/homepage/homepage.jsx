import React from 'react';
import LeftSidebar from './left-sidebar';
import MainContent from './main-content';
import RightSidebar from './right-sidebar';
import { Route } from 'react-router-dom';

const Homepage = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="test col-4 col-md-3"><LeftSidebar /></div>
        <div className="test col-8 col-md-6"><MainContent logout={props.logout}/></div>
        <div className="test col"><RightSidebar /></div>
      </div>
    </div>
  )
};

export default Homepage;
