

const firebaseConfig = {
  apiKey: "AIzaSyDy2sPweoulJaoxO_CsDyXZhFDvI0pBzmE",
  authDomain: "lets-chat-974e4.firebaseapp.com",
  projectId: "lets-chat-974e4",
  storageBucket: "lets-chat-974e4.appspot.com",
  messagingSenderId: "688530429623",
  appId: "1:688530429623:web:e425681d0e1ac345bc9f32"
};


const app = initializeApp(firebaseConfig);



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   
   });});}
getData();
 
