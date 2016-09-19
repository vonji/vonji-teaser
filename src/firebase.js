const firebase = require('firebase/app');
require('firebase/database');

const PROD = process.argv.includes('--release');

if (PROD) {
  firebase.initializeApp(require('./firebase.config.prod.js'));
} else {
  firebase.initializeApp(require('./firebase.config.dev.js'))
}

export const db = firebase.database();
