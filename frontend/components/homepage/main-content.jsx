import React from 'react';
import NavbarContainer from '../navbar/navbar-container';
import { Route, Switch } from 'react-router-dom';
import PlaylistDetailContainer from '../playlist_detail/playlist-detail-container';

const MainContent = () => (
  <div className="main-content container">
      <NavbarContainer />
    <Switch>
      <Route path="/playlists/:playlistID" component={PlaylistDetailContainer} />
    </Switch>
  </div>
);

export default MainContent;
