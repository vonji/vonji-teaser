import React from 'react';
import _ from 'lodash';
import { db } from '../../firebase.js';
require('./SignInForm.scss');

import VjRollingInput from '../VjRollingInput/VjRollingInput.jsx';
import VjInput from '../VjInput/VjInput.jsx';


const VjAlert = (props) => {
  return (
    <div onClick={props.onClick} className={`vj-alert vj-alert-${props.type}`}>
      <div className="vj-alert-heading">{props.title}</div>
      <div className="vj-alert-body">{props.children}</div>
    </div>
  );
};

const VjInputGroup = (props) => {
  return (
    <div className="vj-input-group">
      <label>{props.label}&nbsp;</label>
      {props.children}
    </div>
  );
}

const VjAlertSubscribeFailure = (props) => {
  return (
    <VjAlert
      onClick={props.onClick}
      type="error"
      title="Oops... quelque chose s'est mal passé."
    >
      Vous avez peut-être oublié quelque chose ou bien le serveur est indisposé.<br/>
      Quoi qu'il en soit réessayez plus tard :)
    </VjAlert>
  )
}

const VjAlertSubscribeSuccess = (props) => {
  return (
    <VjAlert
      onClick={props.onClick}
      type="success"
      title="Super !"
    >
      Merci de vous être inscrit sur Vonji,
      vous recevrez bientôt des nouvelles de nous et
      apparaitrez sur notre liste déroulante !
    </VjAlert>
  )
}

class SignInForm extends React.Component {

  constructor(props) {
    super(props);
    this.ph = { email: 'none', name: 'Pierre', skill: 'faire du repassage' };
    this.state = {
      entries: [],
      current: this.ph,
      name: '', skill: '',
      email: '', postcode: '',
    };
    this.onSubmitForm = ::this.onSubmitForm;
    this.dismissAlert = ::this.dismissAlert;
    this.updateName = ::this.updateName;
    this.updateSkill = ::this.updateSkill;
    this.updateEmail = ::this.updateEmail;
    this.updatePostcode = ::this.updatePostcode;
    this.onSubmitSuccess = ::this.onSubmitSuccess;
    this.onSubmitFailure = ::this.onSubmitFailure;
  }

  entriesReducer(entries, newEntry) {
    if (newEntry) {
      return [...entries, {
        email: newEntry.email,
        name: newEntry.name,
        postcode: "" + newEntry.postcode,
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

  onSubmitSuccess() {
    this.setState({ alert: 'success' });
    setTimeout(() => {
      this.dismissAlert();
    }, 5000);
  }

  onSubmitFailure(err) {
    this.setState({ alert: 'failure' });
    setTimeout(() => {
      this.dismissAlert();
    }, 5000);
  }

  dismissAlert() {
    this.setState({ alert: undefined });
  }

  onSubmitForm(ev) {
    ev.preventDefault();

    const {
      state: { name, skill, email, postcode },
    } = this;

    const data = {
      name, skill, email, postcode,
      createdAt: Date.now(),
      validated: false,
    };

    const key = db.ref('/entries').push().key;

    db.ref('/entries/' + key).update(data)
      .then(this.onSubmitSuccess)
      .catch(this.onSubmitFailure);
  }

  updateName(name) { this.setState({ name }); }
  updateSkill(skill) { this.setState({ skill }); }
  updateEmail(email) { this.setState({ email }); }
  updatePostcode(postcode) { this.setState({ postcode }); }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  render() {
    const {
      onSubmitForm,
      updateName, updateSkill,
      updateEmail, updatePostcode,
      state: {
        alert,
        current: { name, skill }
      },
    } = this;
    return (
      <div className="sign-in">
        { alert && alert === 'success' && <VjAlertSubscribeSuccess onClick={this.dismissAlert}/> }
        { alert && alert === 'failure' && <VjAlertSubscribeFailure onClick={this.dismissAlert}/> }
        <VjInputGroup label="Je m'appelle">
          <VjRollingInput
            onChange={updateName} value={this.state.name}
            className="vj-roll-name"
            placeholder={name}
          />
        </VjInputGroup>

        <VjInputGroup label="Et je sais">
          <VjRollingInput
            onChange={updateSkill} value={this.state.skill}
            className="vj-roll-skill"
            placeholder={skill}
          />
        </VjInputGroup>

        <VjInputGroup label="Mon email c'est">
          <VjInput
            onChange={updateEmail} value={this.state.email}
            className="vj-email vj-ph-out"
            name="email"
            type="text"
            placeholder="jean.martin@gmail.com"
          />
        </VjInputGroup>

        <VjInputGroup label="Mon code postal c'est">
          <VjInput
            onChange={updatePostcode} value={this.state.postcode}
            className="vj-postcode vj-ph-out"
            name="postcode"
            type="text"
            placeholder="63700"
          />
        </VjInputGroup>

        <button onClick={onSubmitForm}>Je participe !</button>
      </div>
    );
  }
}

export default SignInForm;
