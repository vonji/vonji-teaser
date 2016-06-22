import React, { Component } from 'react';

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  handleClick() {
    this.setState({
      checked: !this.state.checked,
    });
    this.props.onClick(!this.state.checked);
  }

  render() {
    const classValue = `fa fa${this.state.checked ? '-check' : ''}-square`;
    const { error, id, children } = this.props;
    return (
      <div>
        <div
          className="check-box"
          onClick={() => this.handleClick()}
        >
          <i className={classValue} ariaHidden="true"></i>
          <input id={id} type="checkbox"></input>
          <label style={{ marginLeft: '0.4em' }} htmlFor={id}>{children}</label>
        </div>
        <div className={`error-label ${error ? 'has-error' : ''}`}>{error}</div>
      </div>
    );
  }
}

export default CheckBox;
