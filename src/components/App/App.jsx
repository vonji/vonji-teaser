import React from 'react';
require('./App.scss');

import MainPage from '../MainPage/MainPage.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="bg"></div>
        <MainPage />
      </div>
    );
  }
}

export default App;
