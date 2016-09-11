import React from 'react';
require('./SignInForm.scss');

import RollingInput from '../RollingInput/RollingInput.jsx';

class SignInForm extends React.Component {
  render() {
    return (
      <div className="sign-in">
        <div className="form">
          <RollingInput className="rl-lastname rl-align-right" placeholder="Pierre" />
          <span>sait</span>
          <RollingInput className="rl-skill" placeholder="faire des cabrioles." />
        </div>
      </div>
    );
  }
}

export default SignInForm;
