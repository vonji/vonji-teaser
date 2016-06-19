import React, { Component } from 'react';

require('./App.scss');

const $ = require('jquery');
require('fullpage.js');

import LogoImg from './LogoImg';
import VonjiBlogLink from './VonjiBlogLink';
import IKnow from './IKnow';

class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      my_name: '',
      my_activity: '',
    };
  }

  render() {
    setTimeout(() => {
      this.setState({
        my_name: 'loup',
        my_activity: 'fuck it!',
      });
    }, 2000);
    return (
      <div className="section">
        <div className="column fullsize space-around">
          <div className="column" style={{width: '100%'}}>
            <LogoImg />
            <IKnow name={this.state.my_name} activity={this.state.my_activity} />
            <a href="#">On sait tous faire quelque chose</a>
            <form>
              <input type="text"/>
              <input type="text"/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const Page2 = () => {
  return (
    <div className="section">
      <div className="column fullsize v-center">
        <LogoImg size="small" />
        <h1 style={{ marginTop: '5px' }}>On sait tous faire quelque chose</h1>
        <button
          className="pure-button vj-btn"
        >
          Je suis curieux !
        </button>
      </div>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
  }

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
