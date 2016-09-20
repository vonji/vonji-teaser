import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App.jsx';

const fb = require('./firebase.js');

ReactDOM.render(<App />, document.getElementById('app'));
