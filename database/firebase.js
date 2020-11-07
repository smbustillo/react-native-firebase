import firebase from 'firebase'

import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDt2z-ruCm9wuqMpaAGHbu_T5bodEBN9VM",
    authDomain: "react-native-firebase-1aa27.firebaseapp.com",
    databaseURL: "https://react-native-firebase-1aa27.firebaseio.com",
    projectId: "react-native-firebase-1aa27",
    storageBucket: "react-native-firebase-1aa27.appspot.com",
    messagingSenderId: "367626091086",
    appId: "1:367626091086:web:9b3ce82f511d7a70f6a11f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export default {
      firebase,
      db
  }