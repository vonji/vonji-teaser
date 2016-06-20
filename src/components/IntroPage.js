import React, { Component } from 'react';

import LogoImg from './LogoImg';
import IKnow from './IKnow';

require('./IntroPage.scss');

class IntroPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="section" id="intro-page">
        <div className="column fullsize space-around">
          <div className="column" style={{ width: '100%' }}>
            <LogoImg />
            <IKnow />
          </div>
        </div>
      </div>
    );
  }
}

export default IntroPage;
