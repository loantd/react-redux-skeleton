import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import ChatIndex from './chat/index';
import HomeIndex from './home/index';

const DashboardRoutes = ({ match }) => {
  return (
    <Switch key={'dashboard'}>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/chat`} />
      <Route path={`${match.url}/chat`} exact={true} component={ChatIndex} />
      <Route path={`${match.url}/home`} exact={true} component={HomeIndex} />
    </Switch>
  );
};

export default DashboardRoutes;
