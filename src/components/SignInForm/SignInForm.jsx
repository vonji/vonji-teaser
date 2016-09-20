import React from 'react';
import _ from 'lodash';
import { db } from '../../firebase.js';
require('./SignInForm.scss');

import RollingInput from '../RollingInput/RollingInput.jsx';
import VjInput from '../VjInput/VjInput.jsx';

class SignInForm extends React.Component {

  constructor(props) {
    super(props);
    this.ph = { email: 'none', name: 'On', skill: 'tous faire quelque chose' };
    this.state = {
      entries: [],
      current: this.ph,
    };
    this.onSubmitForm = ::this.onSubmitForm;
    this.updateName = ::this.updateName;
    this.updateSkill = ::this.updateSkill;
    this.updateEmail = ::this.updateEmail;
  }

  entriesReducer(entries, newEntry) {
    if (newEntry) {
      return [...entries, {
        email: newEntry.email,
        name: newEntry.name,
        skill: newEntry.skill,
      }];
    }
    return entries;
  };

  componentDidMount() {
    db.ref('/entries')
      .orderByChild('validated')
      .equalTo(true)
      .on('value', snap => {
        this.setState({entries: _.reduce(snap.val(), this.entriesReducer, []) });
      });

    setInterval(() => {
      this.setState({
        current: _.sample(this.state.entries.filter(e => e.email !== this.state.current.email)) || this.ph,
      });
    }, 5000);
  }

  onSubmitForm(ev) {
    ev.preventDefault();

    const { name, skill, email } = this.state;

    const data = {
      name, skill, email,
      createdAt: Date.now(),
      validated: false,
    };

    console.log(data);

    const key = db.ref('/entries').push().key;
    db.ref('/entries/' + key).update(data)
    .then(() => {
      console.log('success');
    })
    .catch(err => {
      console.error('error', err);
    });
  }

  updateName(name) { this.setState({ name }); }

  updateSkill(skill) { this.setState({ skill }); }

  updateEmail(email) { this.setState({ email }); }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  render() {
    const {
      onSubmitForm,
      updateName, updateSkill, updateEmail,
      state: {
        current: { name, skill }
      },
    } = this;
    return (
      <div className="sign-in">
        <div className="form">
          <RollingInput
            onChange={updateName} value={this.state.name}
            className="rl-name rl-align-right"
            placeholder={name}
          />
          <div className="rl-verb">&nbsp;sait&nbsp;</div>
          <RollingInput
            onChange={updateSkill} value={this.state.skill}
            className="rl-skill"
            placeholder={skill}
          />
        </div>
        <VjInput
          onChange={updateEmail} value={this.state.email}
          className="vj-email vj-center"
          name="email"
          type="text"
          placeholder="jean@pierre.com"
        />
        <button onClick={onSubmitForm}>Je participe !</button>
      </div>
    );
  }
}

export default SignInForm;
