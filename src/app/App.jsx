import { hot } from 'react-hot-loader';
import React from 'react';
import PropTypes from 'prop-types';
import { connect, Provider } from 'react-redux';
import { Redirect, Route, Router, Switch } from 'react-router-dom';

import MainRoute from './routes';
import { storeHistory } from 'store/configureStore';
import { IntlWrapper, Spinner, NotFound } from './views/components';

const InitialPath = ({ component: Component, isLoggedIn, ...rest }) =>
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn
        ? (location.pathname === '/' || location.pathname === '/app' || location.pathname === '/app/' ?
          <Redirect to={'/dashboard'} />
          : <Component {...props} />)
        : <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}/>}/>;

const AppContainer = ({match, isLoggedIn = true}) => {
  return (
    <React.Fragment>
      <Switch>
        <InitialPath
          path={`${match.url}`}
          isLoggedIn={isLoggedIn}
          component={MainRoute}/>
        <Route component={NotFound}/>
      </Switch>
      <Spinner/>
    </React.Fragment>
  );
};

AppContainer.propTypes = {
  isLoggedIn: PropTypes.bool,
  match: PropTypes.any
};

const mapStateToProps = () => {
  return {};
};

const appContainerConnected = connect(mapStateToProps)(AppContainer);
const HotAppContainer = hot(module)(appContainerConnected);

const App = ({store}) => (
  <Provider store={store}>
    <IntlWrapper>
      <Router history={storeHistory}>
        <Switch>
          <Route path='/' component={HotAppContainer} />
        </Switch>
      </Router>
    </IntlWrapper>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object
};

export default App;
