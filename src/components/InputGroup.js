import React, { Component } from 'react';

class InputGroup extends Component {
  render() {
    const {
      id, placeholder, label,
      text, onChange, error,
    } = this.props;
    return (
      <div className={`control-input-group ${error ? 'has-error' : ''}`}>
        <div className="input-wrapper">
          <label htmlFor={id}>{label}</label>
          <input
            value={text}
            onChange={ev => onChange(ev.target.value)}
            type="text" id={id} placeholder={placeholder}
          />
        </div>
        <div className="error-label">{error}</div>
      </div>
    );
  }
}

export default InputGroup;
