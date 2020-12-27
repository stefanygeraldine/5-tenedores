import React, {useEffect} from 'react';
import Navigation from "./app/navigation/Navigations";
import {firebaseApp} from './app/navigation/utils/firebase'

import firebase from "firebase";

export default function App() {
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      console.log('user', user)
    })
  }, [])
  return (
    <Navigation/>
  );
}
