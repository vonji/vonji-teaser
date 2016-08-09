import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { reducers } from './reducers';

const logger = createLogger();

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk, promise, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
