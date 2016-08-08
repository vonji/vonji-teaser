import React, { Component } from 'react';

class ControlGroup extends Component {
  render() {
    const { error, children, className } = this.props;
    return (
      <div className={`control-group ${className} ${error ? 'has-error' : ''}`}>
        <div className="control-wrapper">
          {children}
        </div>
        <div className="error-label">{error}</div>
      </div>
    );
  }
}

export default ControlGroup;
