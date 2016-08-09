import React from 'react';

import { Router, Route, IndexRoute } from 'react-router'

import IndexView from './views/IndexView';
import MoreInfoView from './views/MoreInfoView';
import MainLayout from './layouts/MainLayout';

const Routes = (props) => {
  return (
    <Router history={props.history}>
      <Route path="/" component={MainLayout}>
        <IndexRoute component={IndexView} />
        <Route path="/test" component={MoreInfoView} />
      </Route>
    </Router>
  );
}

export default Routes;
