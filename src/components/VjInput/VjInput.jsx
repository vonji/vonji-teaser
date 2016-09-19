import React from 'react';
import _ from 'lodash';
require('./VjInput.scss');

class VjInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.onChange = ::this.onChange;
  }

  onChange(ev) {
    ev.preventDefault();
    this.setState({
      value: ev.target.value,
    });
  }

  isDirty() {
    return this.state.value !== '';
  }

  render() {
    const {
      onChange,
      props: { placeholder, className, type, name },
      state: { value },
    } = this;

    return (
      <div className={`vj-input ${className} ${this.isDirty() ? 'vj-input-dirty' : ''}`}>
        <input onChange={onChange} type={type} name={name} value={value} />
        <label>{placeholder}</label>
      </div>
    );
  }
}

export default VjInput;
