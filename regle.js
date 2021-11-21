/*

Js Box règle 

*/
var modal = document.getElementById("myRegle");


var btn = document.getElementById("OPM");


var span = document.getElementsByClassName("fermer")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}