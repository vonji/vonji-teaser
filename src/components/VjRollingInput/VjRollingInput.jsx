import React from 'react';
import _ from 'lodash';
require('./VjRollingInput.scss');

const ANIM_STATES = {
  enter: {leave: false, enter: true},
  normal: {leave: false, enter: false},
  leave: {leave: true, enter: false},
}

class VjRollingInput extends React.Component {

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
    if (nextProps.placeholder !== this.state.placeholder) {
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
      'vj-roll-wrapper',
      this.isDirty() ? 'vj-roll-dirty' : '',
    ].join(' ');

    const placeholderClasses = [
      "vj-roll-placeholder-label",
      ANIM_STATES[animState].leave ? 'vj-roll-leave' : '',
      ANIM_STATES[animState].enter ? 'vj-roll-enter' : '',
    ].join(' ');

    return (
      <div className={rootClasses}>
        <input
          onChange={ev => onChange(ev.target.value, ev)}
          value={value}
          className="vj-roll" type="text"
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

VjRollingInput.defaultProps = {
  value: '',
};

export default VjRollingInput;
