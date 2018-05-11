import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';

import asyncComponent from '../utils/AsyncComponent';
import theme from '../theme';

const AsyncHome = asyncComponent(() => import('../components/Home'));

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <React.Fragment>
            <CssBaseline />
            <Switch>
              <Route path="/:subFolder" component={AsyncHome} />
              <Route path="/" component={AsyncHome} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
