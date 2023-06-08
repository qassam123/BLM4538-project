import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8GRNVefWaOi9wvbaa6BAa1JrSjp7XNRo",
  authDomain: "fitness-909bf.firebaseapp.com",
  projectId: "fitness-909bf",
  storageBucket: "fitness-909bf.appspot.com",
  messagingSenderId: "720190895231",
  appId: "1:720190895231:web:c35d6716a66b218ec7fb4a"
};


// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;