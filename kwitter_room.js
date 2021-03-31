
var firebaseConfig = {
    apiKey: "AIzaSyBfP5fvgwvHfjEx-bLPMi1ycJ44LwE9bvA",
    authDomain: "kwitter-project-29bce.firebaseapp.com",
    projectId: "kwitter-project-29bce",
    storageBucket: "kwitter-project-29bce.appspot.com",
    messagingSenderId: "807054603960",
    appId: "1:807054603960:web:a8a91cc07529d02f30664d",
    measurementId: "G-DLEQ84XHEY"
  };      
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;   
function logout()
{

}
    });});}
getData();