import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './landing_page/landing-page';
import Homepage from './homepage/homepage';
import { AuthRoute, ProtectedRoute } from './shared/route';

const App = () => {
  return (
    <Switch>
      <AuthRoute path='/login' component={LandingPage} />
      <ProtectedRoute path='/' component={Homepage} />
    </Switch>
  );
};

export default App;
