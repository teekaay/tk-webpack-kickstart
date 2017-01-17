import { createStore, applyMiddleware } from 'redux';
import { rootReducer, initialState } from './reducer';

export function configureStore(preloadedState, middleware) {
  return createStore(rootReducer, preloadedState, applyMiddleware(...middleware));
}

const middlewares = [];

if(process.env.NODE_ENV !== 'production') {
  const createLogger = require('redux-logger');
  const logger = createLogger();
  middlewares.push(logger);
}

const Store = configureStore(initialState, middlewares);
export default Store;
