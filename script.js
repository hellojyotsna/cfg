// function helloTux(){
//     document.getElementById('tuxOverlay').style.visibility="visible";
// }

// function byeTux(){
//     document.getElementById('tuxOverlay').style.visibility="hidden";
// }

// function helloTre(){
//     document.getElementById('treOverlay').style.visibility="visible";
// }

// function byeTre(){
//     document.getElementById('treOverlay').style.visibility="hidden";
// }

// function goTux(){
//     document.getElementById('light').window.location.href="./tuxedo.html";
// }

var modal = document.getElementById('notifyMe');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// function oneAppear(){
//     var show=document.getElementById('One');
//     if(show.style.display='none'){
//         show.style.display='block'
//     }
//     else{
//         show.style.display='none';
//     }
// }

// var hello=document.getElementById('One');

// function helloOne(){
//     var x=document.getElementsByClassName('a2c');
//     if(x.textContent='Added!'){
//        hello.style.display='block'
//     }
//     else{
//         hello.style.display='';
//     }
// };

// function inCart(){
//     x.textContent='Added!';
// };

// function clickey(){
//     inCart();
//     helloOne();
// }

function openCart(){
    alert('Cart is currently unavailable. Please try later.')
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}