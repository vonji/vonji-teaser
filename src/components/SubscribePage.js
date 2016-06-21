import React, { Component } from 'react';

import CheckBox from './CheckBox';

require('./SubscribePage.scss');

class SubscribePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitDisabled: true,
    };
  }

  handleAcceptedLegalMentions(status) {
    this.setState({
      submitDisabled: status,
    });
  }

  render() {
    return (
      <div className="section" id="subscribe-page">
        <div className="column fullsize">
          <h1>Et toi tu sais faire quoi ?</h1>
          <h2>Fais nous rêver :)</h2>
          <div className="form">
            <div className="control-input-group">
              <label htmlFor="name" >Je m'appelle</label>
              <input id="name" type="text" placeholder="Jean" />
            </div>

            <div className="control-input-group">
              <label htmlFor="activity">Je sais</label>
              <input id="activity" type="text" placeholder="faire des crêpes" />
            </div>

            <div className="control-input-group">
              <label htmlFor="postcode" >Je vis dans le</label>
              <input type="text" id="postcode" placeholder="63100" />
            </div>

            <div className="control-input-group">
              <label htmlFor="email">Tenez-moi au courant sur</label>
              <input type="email" id="email" placeholder="jean@gmail.com" />
            </div>

            <div className="controls-group">
              <CheckBox id="accept" onClick={(ev, status) => this.handleAcceptedLegalMentions(status)}>
                J'accepte les mentions légales !
              </CheckBox>
              <div>
                <button disabled={this.state.submitDisabled}>{this.state.submitDisabled ? 'Accepte les mentions :)' : 'Et voilà !'}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubscribePage;
