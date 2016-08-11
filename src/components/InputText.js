import React, { Component } from 'react';
import ControlGroup from './ControlGroup';

class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: this.props.placeholder,
    };
  }
  render() {
    const {
      id, label, inline,
      text, onChange, error,
      className,
    } = this.props;
    return (
      <ControlGroup error={error}>
        <div className="input-wrapper">
          <label htmlFor={id}>{label}</label>
          <input
            value={text}
            onFocus={ev => this.setState({ placeholder: '' }) }
            onBlur={ev => this.setState({ placeholder: this.props.placeholder }) }
            onChange={ev => onChange(ev.target.value)}
            type="text" id={id} placeholder={this.state.placeholder}
          />
        </div>
      </ControlGroup>
    );
  }
}

export default InputText;
