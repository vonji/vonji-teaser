import React, { Component } from 'react';
import ControlGroup from './ControlGroup';

class InputText extends Component {
  render() {
    const {
      id, placeholder, label,
      text, onChange, error,
    } = this.props;
    return (
      <ControlGroup error={error}>
        <label htmlFor={id}>{label}</label>
        <input
          value={text}
          onChange={ev => onChange(ev.target.value)}
          type="text" id={id} placeholder={placeholder}
        />
      </ControlGroup>
    );
  }
}

export default InputText;
