import React, { Component } from 'react';

require('style!css!sass!./App.scss');
const mainLogoUrl = require('url!../../public/img/vonji-logo-white.png');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vanished: false,
    };
    this.animateVanish = this.animateVanish.bind(this);
  }

  animateVanish() {
    this.setState({
      vanished: true,
    });
  }

  render() {
    return (
      <div>
        <div id="header">
          <a href="http://blog.vonji.fr/">Vonji Blog</a>
        </div>
        <div id="content">
          <div className="top"><img src={mainLogoUrl} alt="Vonji Main Logo"/></div>
          <div className="middle"><h1>On sait tous faire quelque chose</h1></div>
          <div className="end"><button className={`pure-button vj-btn ${this.state.vanished ? 'do-vanish' : ''}`} onClick={this.animateVanish}>Je suis curieux !</button></div>
        </div>
        <div id="footer">

        </div>
      </div>
    );
  }
}

export default App;
