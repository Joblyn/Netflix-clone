import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDQdS_KKBPk6tFTSYzuwUvIG5jk5vSa-KE",
  authDomain: "netflix-clone-40b11.firebaseapp.com",
  databaseURL: "https://netflix-clone-40b11.firebaseio.com",
  projectId: "netflix-clone-40b11",
  storageBucket: "netflix-clone-40b11.appspot.com",
  messagingSenderId: "276548532464",
  appId: "1:276548532464:web:c9e4976374d43ff49c6a35"
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase }; 

