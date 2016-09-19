import React from 'react';
import _ from 'lodash';
import { db } from '../../firebase.js';
require('./SignInForm.scss');

import RollingInput from '../RollingInput/RollingInput.jsx';
import VjInput from '../VjInput/VjInput.jsx';

const dummyList = [
  {name: "jfdksl", skill: "fjieojfdkslfd"},
  {name: "jkliuyre", skill: 'paofk fjksmiez rueioz'},
  {name: "jfdi", skill: 'paomiez rueioz'},
  {name: "iopezrej", skill: 'paofk fjkseioz'},
  {name: "xcjis", skill: 'iofk fjksmiez ruz'},
];

class SignInForm extends React.Component {

  constructor(props) {
    super(props);
    this.ph = { email: 'none', name: 'On', skill: 'tous faire quelque chose' };
    this.state = {
      entries: [],
      current: this.ph,
    };
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

  render() {
    const { state: { current: { name, skill } } } = this;
    return (
      <div className="sign-in">
        <div className="form">
          <RollingInput className="rl-lastname rl-align-right" placeholder={name} />
          <div className="rl-verb">&nbsp;sait&nbsp;</div>
          <RollingInput className="rl-skill" placeholder={skill} />
        </div>
        <VjInput className="email" name="email" type="text" placeholder="jean@pierre.com" />
        <button>Envoyer</button>
      </div>
    );
  }
}

export default SignInForm;
