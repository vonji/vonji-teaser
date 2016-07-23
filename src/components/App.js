import React, { Component } from 'react';

const $ = require('jquery');
require('fullpage.js');

import SubscribePage from './SubscribePage';
import IntroPage from './IntroPage';
import Page2 from './Page2';

class App extends Component {
  componentDidMount() {
    $('#fullpage').fullpage({
      navigation: true,
      controlArrows: true,
    });
  }

  render() {
    return (
      <div>
        <div id="fullpage">
          <IntroPage />
        </div>
      </div>
    );
  }
}

export default App;
