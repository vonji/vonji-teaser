import React, { Component } from 'react';

const mainLogoUrl = require('url!../../public/img/vonji-logo-white.png');

class App extends Component {
  render() {
    return (
      <div className="column">
        <div id="main-logo">
          <img src={mainLogoUrl} alt="Vonji Main Logo"/>
          <h1>On sait tous faire quelque chose.</h1>
        </div>
      </div>
    );
  }
}

export default App;
