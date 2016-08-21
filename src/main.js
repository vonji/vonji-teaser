import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';
import _ from 'lodash';
import { storeProvider } from './store';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import Routes from './routes';

require('font-awesome/css/font-awesome.css');

const IS_PROD = process.env.NODE_ENV === 'production';

const store = storeProvider(IS_PROD);

if (document.location.hostname.search("vonji.fr") !== -1) {
  ReactGA.initialize('UA-81241241-1', {
    debug: true,
  });
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Routes history={history} />
  </Provider>
, document.getElementById('app'));
