import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyDGkzU2fnPi0oXxzA_2oWcUnEeqfWM3zxU",
  authDomain: "chat-react-e962b.firebaseapp.com",
  projectId: "chat-react-e962b",
  storageBucket: "chat-react-e962b.appspot.com",
  messagingSenderId: "145869011061",
  appId: "1:145869011061:web:7e56b8a186634514f8603c",
  measurementId: "G-GQ60HS2LJ3",
});

export const Context = createContext(null);
const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
