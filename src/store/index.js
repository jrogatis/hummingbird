import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import reduxPromise from 'redux-promise';
import reducers from '../reducers';

const history = createHistory();
const routeMiddleware = routerMiddleware(history);

const combReducers = combineReducers({
  filesList: reducers,
  router: routerReducer,
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

let middlewares;
if (process.env.NODE_ENV !== 'production') {
  const logger = require('redux-logger').default;
  middlewares = [routeMiddleware, logger, reduxPromise];
} else {
  middlewares = [routeMiddleware, reduxPromise];
}

const store = createStore(combReducers, composeEnhancers(applyMiddleware(...middlewares)));

export { store, history };
