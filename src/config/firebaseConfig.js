import { initializeApp } from "firebase/app";

//import firebase from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBbftYe96tbEmxE8iWS8zOqD7MR72jRQCY",
  authDomain: "fir-fd32c.firebaseapp.com",
  projectId: "fir-fd32c",
  storageBucket: "fir-fd32c.appspot.com",
  messagingSenderId: "492117786190",
  appId: "1:492117786190:web:e68c5594851ea874388d1f",
};
/*
if(firebase.app.length ===0){
  const app = initializeApp(firebaseConfig);
}*/
const Firebase = initializeApp(firebaseConfig);

export default Firebase;
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
