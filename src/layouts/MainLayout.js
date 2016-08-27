import React, { Component } from 'react';

import Logo from '../components/Logo';
import TagLine from '../components/TagLine';
import { Link } from 'react-router';

require('./MainLayout.scss');

class MainLayout extends Component {
  render() {
    return (
      <div id="vj-site">
        <header>
          <Link to="/">
            <Logo color="white" />
          </Link>
          <TagLine />
        </header>

        <div id="vj-content">
          {this.props.children}
        </div>

        <footer>
          <div>
            <strong>Vonji</strong> est la première plateforme de <strong>skillfunding</strong>.
          </div>
          <div>
            Vous pouvez nous contacter sur contact@vonji.fr.
          </div>
          <div>
            <Link to="/more">En savoir plus</Link>&nbsp;-&nbsp;
            <Link to="/faq">FAQ</Link>
          </div>
        </footer>
      </div>
    );
  }
}

export default MainLayout;
