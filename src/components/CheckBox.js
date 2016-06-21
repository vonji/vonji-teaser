import React, { Component } from 'react';

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      checked: !this.state.checked,
    });
    this.props.onClick(event, this.state.checked);
  }

  render() {
    const classValue = `fa fa${this.state.checked ? '-check' : ''}-square`;
    return (
      <div
        className="checkBox"
        onClick={this.handleClick}
      >
        <i className={classValue} ariaHidden="true"></i>
        <input id={this.props.id} type="checkbox"></input>
        <label style={{ marginLeft: '0.4em' }} htmlFor={this.props.id}>{this.props.children}</label>
      </div>
    );
  }
}

export default CheckBox;
