import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyAhqcRmNiIABks6kHbTmEOyrVPeoQD3znc",
    authDomain: "todo-app-a5c56.firebaseapp.com",
    databaseURL: "https://todo-app-a5c56.firebaseio.com",
    projectId: "todo-app-a5c56",
    storageBucket: "todo-app-a5c56.appspot.com",
    messagingSenderId: "669346522155"
  };

  firebase.initializeApp(config);

} catch (e) {

}

export const firebaseRef = firebase.database().ref();
export default firebase;
