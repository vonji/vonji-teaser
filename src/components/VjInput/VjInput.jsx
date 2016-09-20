import React from 'react';
import _ from 'lodash';
require('./VjInput.scss');

const VjInput = props => {
  const {
    onChange, placeholder, className,
    type, name, value,
  } = props;

  return (
    <div className={`vj-input ${className} ${value !== '' ? 'vj-input-dirty' : ''}`}>
      <input onChange={ev => onChange(ev.target.value, ev)} type={type} name={name} value={value} />
      <label>{placeholder}</label>
    </div>
  );
}

VjInput.defaultProps = {
  value: '',
};

export default VjInput;
