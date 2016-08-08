import React, { Component } from 'react';

import Logo from '../components/Logo';
import TagLine from '../components/TagLine';

require('./MainLayout.scss');

class MainLayout extends Component {
  render() {
    return (
      <div id="vj-wrapper">
        <header>
          <Logo />
          <TagLine />
        </header>

        <div id="vj-content">
          {this.props.children}
        </div>

        <footer>
          <div>
            <strong>Vonji</strong> est la première plateforme de <strong>skillfunding</strong> autogérée.
          </div>
          <div>
            Pour l'instant c'est un peu vide mais il y aura bientôt du neuf&#8239;!
          </div>
          <div>
            Ah&#8239;! J'oubliais, vous pouvez nous contacter à contact@vonji.fr.
          </div>
        </footer>
      </div>
    );
  }
}

export default MainLayout;
