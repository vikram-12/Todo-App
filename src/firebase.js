import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBKk0fI0178XakiyCvj2Fq4GcVfGJBn4uk",
  authDomain: "todo-react-dab3d.firebaseapp.com",
  projectId: "todo-react-dab3d",
  storageBucket: "todo-react-dab3d.appspot.com",
  messagingSenderId: "769076376896",
  appId: "1:769076376896:web:a3ac8ce0e8cc754f07b6a5",
  measurementId: "G-QLXXM6B4KN",
};

const db = firebase.initializeApp(firebaseConfig);

export default db;
