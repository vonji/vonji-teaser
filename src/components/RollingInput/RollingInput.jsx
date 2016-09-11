import React from 'react';
import _ from 'lodash';
require('./RollingInput.scss');

const ANIM_STATES = {
  enter: {leave: false, enter: true},
  normal: {leave: false, enter: false},
  leave: {leave: true, enter: false},
}

class RollingInput extends React.Component {

  constructor() {
    super();
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.changePlaceholder = this.changePlaceholder.bind(this);
    this.state = {
      placeholder: '',
      animState: 'normal',
      animRunning: true,
    };
  }

  componentDidMount() {
    this.setState({
      placeholder: this.props.placeholder,
    });
    setInterval(this.changePlaceholder, 5000);
  }

  changePlaceholder() {
    if (this.state.animRunning) {
      Promise.resolve()
      .then(() => {
        return new Promise(r => {
          this.setState({ animState: 'leave' }, r);
        });
      })
      .then(() => {
        return new Promise(r => {
          setTimeout(() => { this.setState({ animState: 'enter' }, r); }, 1000);
        });
      })
      .then(() => {
        return new Promise(r => {
          setTimeout(() => { this.setState({ animState: 'normal' }, r); }, 1000);
        })
      });
    }
  }

  onFocus() {
    this.setState({
      animState: 'normal',
      animRunning: false,
    });
  }

  onBlur() {
    this.setState({
      animRunning: true,
    });
  }

  onChange() {
    console.log('on change');
  }

  render() {
    const {
      onChange, onFocus, onBlur,
      changePlaceholder,
      state: { animState, placeholder },
      props: { className }
    } = this;

    const rootClasses = [
        className,
        'rl-wrapper',
        false ? 'rl-dirty' : '',
      ].join(' ');
    const placeholderClasses = [
        "rl-placeholder-label",
        ANIM_STATES[animState].leave ? 'rl-leave' : '',
        ANIM_STATES[animState].enter ? 'rl-enter' : '',
      ].join(' ');

    return (
      <div className={rootClasses}>
        <input
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className="rl" type="text"
        />
        <label
          className={placeholderClasses}
        >
          {placeholder}
        </label>
      </div>
    );
  }
}

export default RollingInput;
