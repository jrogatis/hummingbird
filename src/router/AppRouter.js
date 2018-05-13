import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import Home from '../components/Home';
import NoMatch from '../containers/pages/404';

class AppRouter extends PureComponent {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <Switch>
          <Route path="/:subFolder" component={Home} />
          <Route path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </ConnectedRouter>
    );
  }
}
export default AppRouter;
