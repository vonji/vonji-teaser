import React from 'react';
require('./RollingInput.scss');

class RollingInput extends React.Component {
  render() {
    const rootClasses = () => {
      return [
        this.props.className,
        'rl-wrapper',
        false ? 'rl-dirty' : '',
      ].join(' ');
    }
    const rootStyles = () => {
      return {
        opacity: 0.6,
      };
    }

    return (
      <div className={rootClasses()}>
        <input className="rl" type="text" />
        <label
          className="rl-placeholder-label"
          style={rootStyles()}
        >
          { this.props.placeholder }
        </label>
      </div>
    );
  }
}

export default RollingInput;
