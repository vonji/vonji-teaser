import React, { Component } from 'react';
import { db } from '../../firebase';
import _ from 'lodash';

require('./IKnow.scss');

class IKnow extends Component {

  constructor(props) {
    super(props);
    this.ph = { email: 'none', name: 'On', skill: 'tous faire quelque chose' };
    this.looping = false;
    this.state = {
      transition: 'none',
      current: this.ph,
      delay: 600,
    };
    this.updateContent = ::this.updateContent;
  }

  componentDidMount() {
    const selectEntries = entry => ({
      email: entry.email,
      name: entry.name,
      skill: entry.skill,
    });
    db.ref('/entries').on('value', snap => this.setState({ entries: snap.val().map(selectEntries) }));
    this.startLooper();
  }

  startLooper() {
    const looper = () => this.updateContent().then(() => setTimeout(looper, this.state.delay * 4));
    if (!this.looping) {
      this.looping = true;
      looper();
    }
  }

  updateContent() {
    const { delay } = this.state;
    return new Promise(resolve => {
      if (!this.state.entries) {
        resolve();
      } else {
        this.setState({ transition: 'out' }, () =>
          setTimeout(() => {
            const { entries, current } = this.state;
            this.setState({
              transition: 'in',
              current: _.sample(entries.filter(e => e.email !== current.email)) || this.ph,
            }, () => setTimeout(() =>
              this.setState({
                transition: 'none',
              }, () => resolve())
            , delay));
          }, delay)
        );
      }
    });
  }

  render() {
    const { transition, current } = this.state;

    return (
      <div style={{ width: '100%' }}>
        <div className="row" style={{ width: '100%' }} id="iknow">
          <h1 className={`name ${transition}`}>
            <span>{current.name}</span>
          </h1>
          <h1 className={`knows ${transition}`}>
            <span>sait</span>
          </h1>
          <h1 className={`skill ${transition}`}>
            <span>{current.skill}</span>
          </h1>
        </div>
      </div>
    );
  }
}

export default IKnow;
