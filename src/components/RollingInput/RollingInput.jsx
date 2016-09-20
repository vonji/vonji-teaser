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
    this.changePlaceholder = ::this.changePlaceholder;
    this.state = {
      placeholder: '',
      animState: 'normal',
    };
  }

  componentDidMount() {
    this.setState({ placeholder: this.props.placeholder });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.placeholder !== this.props.placeholder) {
      this.changePlaceholder(nextProps.placeholder);
    }
  }

  changePlaceholder(newPlaceholder) {
    if (!this.isDirty()) {
      Promise.resolve()
      .then(() => {
        return new Promise(r => {
          this.setState({ animState: 'leave' }, r);
        });
      })
      .then(() => {
        return new Promise(r => {
          setTimeout(() => { this.setState({ placeholder: newPlaceholder }, r); }, 1000);
        });
      })
      .then(() => {
        return new Promise(r => {
          setTimeout(() => { this.setState({ animState: 'enter' }, r); }, 10);
        });
      })
      .then(() => {
        return new Promise(r => {
          setTimeout(() => { this.setState({ animState: 'normal' }, r); }, 1000);
        })
      });
    }
  }

  isDirty() {
    return this.props.value !== '';
  }

  render() {
    const {
      changePlaceholder,
      state: { animState, placeholder },
      props: { className, onChange, value }
    } = this;

    const rootClasses = [
        className,
        'rl-wrapper',
        this.isDirty() ? 'rl-dirty' : '',
      ].join(' ');

    const placeholderClasses = [
        "rl-placeholder-label",
        ANIM_STATES[animState].leave ? 'rl-leave' : '',
        ANIM_STATES[animState].enter ? 'rl-enter' : '',
      ].join(' ');

    return (
      <div className={rootClasses}>
        <input
          onChange={ev => onChange(ev.target.value, ev)}
          value={value}
          className="rl" type="text"
        />
        <label
          className={placeholderClasses}
          style={ _.merge({}, this.isDirty() ? {opacity: 0} : {}) }
        >
          {placeholder}
        </label>
      </div>
    );
  }
}

RollingInput.defaultProps = {
  value: '',
};

export default RollingInput;
