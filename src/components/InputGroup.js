import React, { Component } from 'react';

class InputGroup extends Component {
  render() {
    const {
      id, placeholder, label,
      text, onChange, error,
    } = this.props;
    return (
      <div className="control-input-group">
        <label htmlFor={id}>{label}</label>
        <div>
          <input
            value={text}
            onChange={ev => onChange(ev.target.value)}
            type="text" id={id} placeholder={placeholder}
          />
          <div className={`error-label ${error ? 'has-error' : ''}`}>{error}</div>
        </div>
      </div>
    );
  }
}

export default InputGroup;
