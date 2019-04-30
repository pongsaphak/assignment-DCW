import * as firebase from 'firebase';

//insert config from firebase
const config = {
  apiKey: "AIzaSyD0Lzoi_hkgrT-hpGZEA5nbZqFHKMkoe98",
  authDomain: "assignment-dcw-b7691.firebaseapp.com",
  databaseURL: "https://assignment-dcw-b7691.firebaseio.com",
  projectId: "assignment-dcw-b7691",
  storageBucket: "assignment-dcw-b7691.appspot.com",
  messagingSenderId: "121159223709"
};
firebase.initializeApp(config);

export default firebase;