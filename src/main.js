import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import ReactGA from 'react-ga';

import IndexView from './views/IndexView';

require('font-awesome/css/font-awesome.css');

const reducers = (state = {}) => state;
const logger = createLogger();

const store = createStore(
  reducers,
  applyMiddleware(thunk, promise, logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

if (document.location.hostname.search("vonji.fr") !== -1) {
  ReactGA.initialize('UA-81241241-1', {
    debug: true,
  });
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

ReactDOM.render(
  <Provider store={store}>
    <IndexView />
  </Provider>
, document.getElementById('app'));
