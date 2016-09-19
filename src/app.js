import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/app.jsx';

const fb = require('./firebase.js');

ReactDOM.render(<App />, document.getElementById('app'));
