import firebase from "firebase";

const config = {
  apiKey: "AIzaSyC6ZU6XjLvKKO7suJqTSlor5iN-nLCoTp0",
  authDomain: "project23-5fce5.firebaseapp.com",
  databaseURL: "https://project23-5fce5.firebaseio.com",
  projectId: "project23-5fce5",
  storageBucket: "project23-5fce5.appspot.com",
  messagingSenderId: "842953004589"
};

const fire = firebase.initializeApp(config);
export default fire;
