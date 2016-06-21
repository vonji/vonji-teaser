import React, { Component } from 'react';

import CheckBox from './CheckBox';
import _ from 'lodash';

require('./SubscribePage.scss');

class SubscribePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mentionAccepted: false,
      name: '',
      skill: '',
      postcode: '',
      email: '',
    };
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  toggleMentions(status) { this.setState({ mentionAccepted: status }); }
  changeName(newName) { this.setState({ name: newName }); }
  changeEmail(newEmail) { this.setState({ email: newEmail }); }
  changePostcode(newPostcode) { this.setState({ postcode: newPostcode }); }
  changeSkill(newSkill) { this.setState({ skill: newSkill }); }

  isFormValid() {
    return _([
      {
        result: this.state.name !== '' && this.state.skill !== '' && this.state.postcode !== '' && this.state.email !== '' && this.state.mentionAccepted,
        message: 'Something is missing',
      },
      {
        result: this.validateEmail(this.state.email),
        message: 'Email is invalid.',
      },
    ])
    .filter(o => !o.result)
    .map(o => o.message)
    .value();
  }

  render() {
    const {
      name,
      skill,
      postcode,
      email,
    } = this.state;
    const errors = this.isFormValid();
    console.log(errors);
    const isFormValid = errors.length === 0;
    return (
      <div className="section" id="subscribe-page">
        <div className="column fullsize">
          <h1>Et toi tu sais faire quoi ?</h1>
          <h2>Fais nous rêver :)</h2>
          <div className="form">
            <div className="control-input-group">
              <label htmlFor="name" >Je m'appelle</label>
              <input
                value={name}
                onChange={(event) => this.changeName(event.target.value)}
                id="name" type="text" placeholder="Jean"
              />
            </div>

            <div className="control-input-group">
              <label htmlFor="activity">Je sais</label>
              <input
                value={skill}
                onChange={ev => this.changeSkill(ev.target.value)}
                id="activity" type="text" placeholder="faire des crêpes"
              />
            </div>

            <div className="control-input-group">
              <label htmlFor="postcode" >Je vis dans le</label>
              <input
                value={postcode}
                onChange={ev => this.changePostcode(ev.target.value)}
                type="text" id="postcode" placeholder="63100"
              />
            </div>

            <div className="control-input-group">
              <label htmlFor="email">Tenez-moi au courant sur</label>
              <input
                value={email}
                onChange={ev => this.changeEmail(ev.target.value)}
                type="email" id="email" placeholder="jean@gmail.com"
              />
            </div>

            <div className="controls-group">
              <CheckBox id="accept" onClick={checked => this.toggleMentions(checked)}>
                J'accepte les mentions légales !
              </CheckBox>
              <div>
                <button
                  disabled={!isFormValid}
                >
                  {!isFormValid ? 'Il manque un truc...' : 'Et voilà !'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubscribePage;
