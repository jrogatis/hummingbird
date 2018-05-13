import React, { PureComponent } from 'react';
import { persistStore } from 'redux-persist';
import { store, history } from '../store';
import AppRouter from '../router/AppRouter';

class App extends PureComponent {
  UNSAFE_componentWillMount() {
    persistStore(store);
  }
  render() {
    return <AppRouter history={history} />;
  }
}

export default App;
