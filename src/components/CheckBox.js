import React, { Component } from 'react';

class CheckBox extends Component {
  render() {
    const { isChecked, error, id, children, onClick } = this.props;
    return (
      <div className={`control-input-group ${error ? 'has-error' : ''}`}>
        <div className="input-wrapper">
          <div
            className={`check-box ${this.props.className}`}
            onClick={() => onClick()}
          >
            <i className={`fa fa${isChecked ? '-check' : ''}-square`} ariaHidden="true"></i>
            <input id={id} type="checkbox"></input>
            <label style={{ marginLeft: '0.4em' }} htmlFor={id}>{children}</label>
          </div>
        </div>
        <div className="error-label">{error}</div>
      </div>
    );
  }
}

export default CheckBox;
