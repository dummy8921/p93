<script>
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCJ8cWgut9ZKOpSsawxzcl0aKV5WFmrmUw",
    authDomain: "kwitter-a3393.firebaseapp.com",
    databaseURL: "https://kwitter-a3393-default-rtdb.firebaseio.com",
    projectId: "kwitter-a3393",
    storageBucket: "kwitter-a3393.appspot.com",
    messagingSenderId: "728506808639",
    appId: "1:728506808639:web:6614f683b8372acea3fb8a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
