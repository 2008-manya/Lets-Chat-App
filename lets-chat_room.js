function randombg(){
    var random= Math.floor(Math.random() * 6) + 0;
    var bigSize = ["url('2.jpg')",
                   "url('3.jpg')",
                   "url('4.jpg')",
                   "url('5.jpg')",
                   "url('6.jpg')",
                   "url('7.jpg')"];
    document.getElementById("random").style.backgroundImage=bigSize[random];
  }


  var firebaseConfig = {
    apiKey: "AIzaSyDrUM2wg4tPVhJvyTIuSnXkApihWH20OXk",
    authDomain: "lets-chat-app-3dd29.firebaseapp.com",
    databaseURL: "https://lets-chat-app-3dd29-default-rtdb.firebaseio.com",
    projectId: "lets-chat-app-3dd29",
    storageBucket: "lets-chat-app-3dd29.appspot.com",
    messagingSenderId: "881911245825",
    appId: "1:881911245825:web:4cbd7f447c6a7a15612400"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome - " + user_name + "!!";
 
  function addRoom(){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
Room_Name : "Manya"


});
localStorage.setItem("room_name",room_name);
window.location = "lets-chat_page.html";

  }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room Name",Room_names);
row="<div class='room_name' id="+Room_names+ " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML = row;
    //End code
    });});}
getData();

function redirectToRoomName(Name){
console.log(Name);
localStorage.setItem("room_name" , Name);
window.location="lets-chat_page.html"

}