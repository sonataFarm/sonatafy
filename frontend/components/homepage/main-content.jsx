import React from 'react';
import NavbarContainer from './navbar-container';
import { Route, Switch } from 'react-router-dom';
import PlaylistDetailContainer from './playlist-detail-container';

const MainContent = () => (
  <Switch className="main-content">
    <Route path="/playlists/:id" component={PlaylistDetailContainer} />
  </Switch>
);

export default MainContent;
