var firebaseConfig = {
    apiKey: "AIzaSyAKw-_5hluPYRRqoXYGGTYMA9RkRhs-KP8",
    authDomain: "kwitter-c36be.firebaseapp.com",
    databaseURL: "https://kwitter-c36be-default-rtdb.firebaseio.com",
    projectId: "kwitter-c36be",
    storageBucket: "kwitter-c36be.appspot.com",
    messagingSenderId: "549160284455",
    appId: "1:549160284455:web:aaabaaa7a7616218113902",
    measurementId: "G-KDDZYL2ELQ"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

var user_welcome = localStorage.getItem("user_Name", username);
document.getElementById("welcome_div").innerHTML = "welcome " + user_welcome + " !"

function addroom()
{
    var room_name = document.getElementById("roomname_input").value;
    console.log("current roomname is " + room_name);
    localStorage.setItem("roomname_input", room_name);
    firebase.database().ref("/").child(room_name).update({
          purpose:"add room"
    });
}