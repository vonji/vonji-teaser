import React from 'react';

import RollingInput from '../RollingInput/RollingInput.jsx';

require('./SignInForm.scss');

class SignInForm extends React.Component {
  render() {
    return (
      <div>
        <RollingInput></RollingInput>
      </div>
    );
  }
}

export default SignInForm;
