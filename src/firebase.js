import firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBFB_5bV5Wbbw-7g_Ai6O5rdSGe_kN0py4",
    authDomain: "scdf-e12e8.firebaseapp.com",
    databaseURL: "https://scdf-e12e8-default-rtdb.firebaseio.com",
    projectId: "scdf-e12e8",
    storageBucket: "scdf-e12e8.appspot.com",
    messagingSenderId: "220004955204",
    appId: "1:220004955204:web:2ebf6d6cc2fee5e8bc3811"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.firestore();
export default database;
