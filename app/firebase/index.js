import firebase from 'firebase';

console.log('firebase pre', process.env)
debugger
try {
  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET,
  };
  console.log('firebase post', process.env)
  firebase.initializeApp(config);

} catch (e) {

}

export const firebaseRef = firebase.database().ref();
export default firebase;
