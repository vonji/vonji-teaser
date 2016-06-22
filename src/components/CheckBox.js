import React, { Component } from 'react';

class CheckBox extends Component {
  render() {
    const { isChecked, error, id, children, onClick } = this.props;
    return (
      <div>
        <div
          className="check-box"
          onClick={() => onClick()}
        >
          <i className={`fa fa${isChecked ? '-check' : ''}-square`} ariaHidden="true"></i>
          <input id={id} type="checkbox"></input>
          <label style={{ marginLeft: '0.4em' }} htmlFor={id}>{children}</label>
        </div>
        <div className={`error-label ${error ? 'has-error' : ''}`}>{error}</div>
      </div>
    );
  }
}

export default CheckBox;
