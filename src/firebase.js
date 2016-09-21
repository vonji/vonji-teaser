const firebase = require('firebase/app');
require('firebase/database');

const PROD = process.env.NODE_ENV === 'production';

if (PROD) {
  firebase.initializeApp(require('./firebase.config.prod.js'));
} else {
  console.log('Firebase in DEV mode');
  firebase.initializeApp(require('./firebase.config.dev.js'))
}

export const db = firebase.database();
