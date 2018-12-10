import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import ChatContainer from './chat';
import HomeContainer from '../../../view/containers/Home';

const DashboardRoutes = ({ match }) => {
  return (
    <Switch key={'dashboard'}>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/chat`} />
      <Route path={`${match.url}/chat`} exact={true} component={ChatContainer} />
      <Route path={`${match.url}/home`} exact={true} component={HomeContainer} />
    </Switch>
  );
};

export default DashboardRoutes;
