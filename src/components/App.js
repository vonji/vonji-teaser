import React, { Component } from 'react';

const $ = require('jquery');
require('fullpage.js');

import VonjiBlogLink from './VonjiBlogLink';
import IntroPage from './IntroPage';

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
        </div>
      </div>
    );
  }
}

export default App;
