import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAugkBNFxBBap1U5XM53gMg0V4tJcTwlLE",
    authDomain: "firegram-database.firebaseapp.com",
    projectId: "firegram-database",
    storageBucket: "firegram-database.appspot.com",
    messagingSenderId: "645623133654",
    appId: "1:645623133654:web:43675c2c5427b33560a077"
  };

  initializeApp(firebaseConfig)
  const projectStorage = getStorage(); 
  const projectFirestore = getFirestore(); 


  export {projectStorage, projectFirestore}