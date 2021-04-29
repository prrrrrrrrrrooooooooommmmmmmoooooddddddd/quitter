//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBQNC6MByQ9sEjcCB-dwJKlF-E-Rc9cwKk",
      authDomain: "qitter-fb8da.firebaseapp.com",
      databaseURL: "https://qitter-fb8da-default-rtdb.firebaseio.com",
      projectId: "qitter-fb8da",
      storageBucket: "qitter-fb8da.appspot.com",
      messagingSenderId: "1035567339574",
      appId: "1:1035567339574:web:0b9a2b47fd8073e1aba097"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData()

function send() {
      message = document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: message, 
            like: 0
      });
      document.getElementById("message").value = "";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"; 
}
