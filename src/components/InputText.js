import React, { Component } from 'react';
import ControlGroup from './ControlGroup';

class InputText extends Component {
  render() {
    const {
      id, placeholder, label,
      text, onChange, error,
      className,
    } = this.props;
    return (
      <ControlGroup error={error} className={className}>
        <div className="input-wrapper">
          <label htmlFor={id}>{label}</label>
          <input
            value={text}
            onChange={ev => onChange(ev.target.value)}
            type="text" id={id} placeholder={placeholder}
          />
        </div>
      </ControlGroup>
    );
  }
}

export default InputText;
