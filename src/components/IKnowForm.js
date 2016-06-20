import React, { Component } from 'react';

class IKnowForm extends Component {
  render() {
    return (
      <form
        className="pure-form pure-form-stacked"
        style={{
          width: '25em',
          padding: '5px',
        }}
      >
        <input className="pure-input-1" id="name" type="text" placeholder="Nom" />
        <input className="pure-input-1" id="activity" type="text" placeholder="Activité" />
        <input className="pure-input-1" id="email" type="text" placeholder="Email" />
        <button className="pure-button pure-input-1">Rejoins-nous!</button>
      </form>
    );
  }
}

export default IKnowForm;
