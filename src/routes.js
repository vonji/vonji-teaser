import React from 'react';

import { Router, Route, IndexRoute } from 'react-router'

import IndexView from './views/IndexView';
import WhyView from './views/WhyView';
import HowMuchView from './views/HowMuchView';
import FaqView from './views/FaqView';
import WhenView from './views/WhenView';
import MoreInfoView from './views/MoreInfoView';
import MainLayout from './layouts/MainLayout';

const Routes = (props) => {
  return (
    <Router history={props.history}>
      <Route path="/" component={MainLayout}>
        <IndexRoute component={IndexView} />
        <Route path="/faq" component={FaqView} />
        <Route path="/more" component={MoreInfoView} />
        <Route path="/more/howmuch" component={HowMuchView} />
        <Route path="/more/when" component={WhenView} />
        <Route path="/more/why" component={WhyView} />
      </Route>
    </Router>
  );
}

export default Routes;
