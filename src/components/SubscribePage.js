import React, { Component } from 'react';
import SubscribeForm from './SubscribeForm';

require('./SubscribePage.scss');

class SubscribePage extends Component {
  render() {
    return (
      <div className="section" id="subscribe-page">
        <div className="column fullsize">
          <h1>Et toi tu sais faire quoi ?</h1>
          <h2>Fais nous rêver :)</h2>
          <SubscribeForm />
        </div>
      </div>
    );
  }
}

export default SubscribePage;
