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
    this.onChange = this.onChange.bind(this);
    this.isDirty = this.isDirty.bind(this);
    this.changePlaceholder = this.changePlaceholder.bind(this);
    this.state = {
      content: '',
      placeholder: '',
      animState: 'normal',
    };
  }

  componentDidMount() {
    this.setState({ placeholder: this.props.placeholder });
  }

  componentDidUpdate(prevProps, prevState) {
    const { onDirty, onClean } = this.props;
    if (onDirty && this.isDirty()) {
      onDirty();
    }
    if (onClean && !this.isDirty()) {
      onClean();
    }
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
    return this.state.content !== '';
  }

  onChange(ev) {
    this.setState({
      content: ev.target.value,
    });
  }

  render() {
    const {
      onChange, isDirty,
      changePlaceholder,
      state: { animState, placeholder, content },
      props: { className }
    } = this;

    const rootClasses = [
        className,
        'rl-wrapper',
        isDirty() ? 'rl-dirty' : '',
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
          value={content}
          className="rl" type="text"
        />
        <label
          className={placeholderClasses}
          style={ _.merge({}, isDirty() ? {opacity: 0} : {}) }
        >
          {placeholder}
        </label>
      </div>
    );
  }
}

export default RollingInput;
