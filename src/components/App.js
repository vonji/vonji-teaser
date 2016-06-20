import React, { Component } from 'react';

const $ = require('jquery');
require('fullpage.js');

import VonjiBlogLink from './VonjiBlogLink';
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
        <VonjiBlogLink />
        <div id="fullpage">
          <IntroPage />
          <Page2 />
        </div>
      </div>
    );
  }
}

export default App;
