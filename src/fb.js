import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDXF2EAL2kLL4XpE9eOeDbktv48dKoIupQ',
  authDomain: 'vonji-teaser.firebaseapp.com',
  databaseURL: 'https://vonji-teaser.firebaseio.com',
  storageBucket: 'vonji-teaser.appspot.com',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();
