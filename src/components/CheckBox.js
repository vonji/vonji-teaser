import React, { Component } from 'react';

import ControlGroup from './ControlGroup';

class CheckBox extends Component {
  render() {
    const { isChecked, error, id, children, onClick } = this.props;
    return (
      <ControlGroup error={error}>
        <div
          className={`check-box ${this.props.className}`}
          onClick={() => onClick()}
        >
          <i className={`fa fa${isChecked ? '-check' : ''}-square`}></i>
          <input id={id} type="checkbox"></input>
          <label style={{ marginLeft: '0.4em' }} htmlFor={id}>{children}</label>
        </div>
      </ControlGroup>
    );
  }
}

export default CheckBox;
