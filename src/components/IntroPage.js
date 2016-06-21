import React, { Component } from 'react';

import LogoImg from './LogoImg';
import IKnow from './IKnow';

require('./IntroPage.scss');

import $ from 'jquery';

class IntroPage extends Component {
  render() {
    return (
      <div className="section" id="intro-page">
        <div className="column fullsize space-around">
          <div className="column" style={{ width: '100%' }}>
            <LogoImg />
            <IKnow />
            <a
              href="#"
              onClick={() => $.fn.fullpage.moveSectionDown()}
            ><h2>On sait tous faire quelque chose</h2></a>
            <p className="explain">
              <strong>Vonji</strong> est la première plateforme de <strong>skillfunding</strong> autogérée.<br />
              Pour l'instant c'est un peu vide mais hey...<br />
              Repassez plus tard... il y aura du nouveau !
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroPage;
