import React, { Component } from 'react';

require('./SubscribePage.scss');

class SubscribePage extends Component {

  render() {
    return (
      <div className="section" id="subscribe-page">
        <div className="header">Et toi tu sais faire quoi ?</div>
        <div className="subtitle">Fais nous rêver :)</div>

        <form className="pure-form">
          <label htmlFor="activity">Je sais faire</label>
          <input id="activity" type="text" placeholder="faire des crêpes" />
          <label htmlFor="name">Je m'appelle</label>
          <input id="name" type="text" placeholder="Jean" />
          <label htmlFor="postcode"></label>
          <input type="text" id="postcode" placeholder="63100" />
          <label htmlFor="email"></label>
          <input type="email" id="email" placeholder="jean@gmail.com" />
        </form>
      </div>
    );
  }
}

export default SubscribePage;
