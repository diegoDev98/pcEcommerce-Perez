import firebase from 'firebase/app'
import '@firebase/firestore'


  const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAnQJxCMoSvTSD5_UMnYD0sLR0cfoJnZRU",
    authDomain: "diegodev-ecommerce.firebaseapp.com",
    projectId: "diegodev-ecommerce",
    storageBucket: "diegodev-ecommerce.appspot.com",
    messagingSenderId: "405087077130",
    appId: "1:405087077130:web:471f127b81223f12e3f0f3"

  });

  
  export function getFirebase() {
    return firebaseConfig
  }
  export function getFireStore() {
    return firebase.firestore(firebaseConfig)
  }