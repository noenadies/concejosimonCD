
var nodetodoadmin;
var todolodeadminfire;
var vinpnombre;
var  vpass;
function inicia(){

    var config = {
        apiKey: "AIzaSyABOpIJyC5XDTAlqwVauPAZET6uUmeMbiQ",
        authDomain: "concejosimoncd.firebaseapp.com",
        databaseURL: "https://concejosimoncd.firebaseio.com",
        projectId: "concejosimoncd",
        storageBucket: "concejosimoncd.appspot.com",
        messagingSenderId: "879095685896"
      };
      firebase.initializeApp(config);
    
      funatraefireadmi();

}


function segundoinicio() {
    
}

  // Initialize Firebase



function funatraefireadmi(){
    firebase.database().ref().child(String("admin")).on("value", function(snapshot) {
  
        todolodeadminfire=snapshot.val();
        segundoinicio();


    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }


function fbtlogin(){alert(777);
 vinpnombre=getv("idinpnombre");
 vpass=String(getv("inppass"));
console.log(vpass+"  aca");
    for(var i in todolodeadminfire){
if(todolodeadminfire.nombre==vinpnombre&&todolodeadminfire.clave==vpass){
window.location="index2.html";


}

    }

   
}

function getv(st){
   return document.getElementById(st).value;
}