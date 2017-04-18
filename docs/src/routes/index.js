import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from '../NoMatch';
import routes from './routes';

class Routes extends React.Component {
  render () {
    return (
      <Switch>
        {routes.map((route) => <Route key={route.path} {...route} />)}
        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default Routes;
