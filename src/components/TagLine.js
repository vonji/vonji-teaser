import React, { Component } from 'react';
import { db } from '../../firebase';
import _ from 'lodash';

class TagLine extends Component {

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
    const entriesReducer = (entries, newEntry) => {
      if (newEntry) {
        return [...entries, {
          email: newEntry.email,
          name: newEntry.name,
          skill: newEntry.skill,
        }];
      }
      return entries;
    };

    // db.ref('/entries')
    //   .orderByChild('validated')
    //   .equalTo(true)
    //   .on('value', snap => {
    //     this.setState({entries: _.reduce(snap.val(), entriesReducer, []) });
    //   });
    //this.startLooper();
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
      <div id="tag-line">
        <h1 className={`before ${transition}`}>
          <span>{current.name}</span>
        </h1>
        <h1 className={`verb ${transition}`}>
          <span>&nbsp;sait&nbsp;</span>
        </h1>
        <h1 className={`after ${transition}`}>
          <span>{current.skill}</span>
        </h1>
      </div>
    );
  }
}

export default TagLine;
