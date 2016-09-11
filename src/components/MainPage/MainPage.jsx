import React from 'react';

import Page from '../Page/Page.jsx';
import SignInForm from '../SignInForm/SignInForm.jsx';

const logoOrange = require('../../assets/img/logo-orange.png');

class MainPage extends React.Component {
  render() {
    return (
      <Page>
        <img className="logo" src={logoOrange} />
        <h1>On sait tous faire quelque chose !</h1>
        <SignInForm />
        <h2>Construisons ensemble la plus grande base de compétences du monde !</h2>
      </Page>
    );
  }
}

export default MainPage;
