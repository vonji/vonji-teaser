import React, { Component } from 'react';

class ControlGroup extends Component {
  render() {
    const { error, children } = this.props;
    return (
      <div className={`control-group ${error ? 'has-error' : ''}`}>
        <div className="input-wrapper">
          {children}
        </div>
        <div className="error-label">{error}</div>
      </div>
    );
  }
}

export default ControlGroup;
