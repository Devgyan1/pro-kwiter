var firebaseConfig = {
      apiKey: "AIzaSyCZYwrQeZE0OcwctMKteqlfYdgC8Ssgu1w",
      authDomain: "kwitter-be0f7.firebaseapp.com",
      databaseURL: "https://kwitter-be0f7-default-rtdb.firebaseio.com",
      projectId: "kwitter-be0f7",
      storageBucket: "kwitter-be0f7.appspot.com",
      messagingSenderId: "845892706009",
      appId: "1:845892706009:web:847215d6c35ed1021ee8c8"
    };
      // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


function logout(){
      
}