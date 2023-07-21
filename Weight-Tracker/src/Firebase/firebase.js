import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC0S95GJmP1gBVXLlEi4VVfSB9YBtF0fHM",
  authDomain: "my-weight-6d538.firebaseapp.com",
  projectId: "my-weight-6d538",
  storageBucket: "my-weight-6d538.appspot.com",
  messagingSenderId: "158824012645",
  appId: "1:158824012645:web:dfcb959d377b1203d31f8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;