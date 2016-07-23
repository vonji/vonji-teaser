import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import ReactGA from 'react-ga';
import App from './components/App';

require('font-awesome/css/font-awesome.css');

const reducers = (state = {}) => state;
const logger = createLogger();

const store = createStore(
  reducers,
  applyMiddleware(thunk, promise, logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

ReactGA.initialize('UA-81241241-1');

ReactDOM.render(
  <Provider store={store} onUpdate={logPageView}>
    <App />
  </Provider>
, document.getElementById('app'));
