import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyA5MovgyB8A9yQRjBW3Z_vFJ2PE1735f60",
    authDomain: "SCDF-webapp.firebaseapp.com",
    databaseURL: "https://scdf-webapp-default-rtdb.asia-southeast1.firebasedatabase.app/"
};
// // Initialize Firebase
let fireb = firebase.initializeApp(firebaseConfig);

export default fireb;

// const db = firebase.database();

// // export { db };