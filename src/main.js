import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import App from './components/App';

require('style!css!sass!./global.scss');

const reducers = (state = {}, action) => {
  return state;
}

const logger = createLogger();

const store = createStore(
  reducers,
  applyMiddleware(thunk, promise, logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const CApp = connect()(App);

ReactDOM.render(
  <Provider store={store}>
    <CApp />
  </Provider>
, document.getElementById("app"));
