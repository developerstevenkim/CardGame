// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCcsiQRI0vxxIpkBhuW6DNPA5GEhw-PDyI",
    authDomain: "cardgame-a330c.firebaseapp.com",
    projectId: "cardgame-a330c",
    storageBucket: "cardgame-a330c.appspot.com",
    messagingSenderId: "146145863549",
    appId: "1:146145863549:web:6b3d5dad516429ac524e14",
    measurementId: "G-7QE50PDP65"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// This javascript file should be referenced by all the html files except for launch and login
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        console.log("User is signed in.");
    } else {
        // No user is signed in.
        console.log("User is not signed in.");
        location.href = './index.html';
    }
});