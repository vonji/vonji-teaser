import React, { Component } from 'react';

require('./App.scss');

const $ = require('jquery');
require('fullpage.js');

import VonjiBlogLink from './VonjiBlogLink';
import Page1 from './Page1';
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
          <Page1 />
          <Page2 />
        </div>
      </div>
    );
  }
}

export default App;
