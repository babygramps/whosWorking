var danny = document.querySelector("#danny");
var rick = document.querySelector("#rick");
var levi = document.querySelector("#levi");
var anthony = document.querySelector("#anthony");
var stef = document.querySelector("#stef");
var avi = document.querySelector("#avi");

var rickCard = document.getElementById("rickCard");
var dannyCard = document.getElementById("dannyCard");
var leviCard = document.getElementById("leviCard");
var AnthonyCard = document.getElementById("anthonyCard");
var StefCard = document.getElementById("stefCard");
var AviCard = document.getElementById("aviCard");

// staff.addEventListener("click", function (){
//     for (var i = 0; i < staff.length; i++){
//         var a = staff[i].classList.contains("clicked");
//         if(a){
//             staff[i].classList.remove("clicked");
//         } else {
//             staff[i].classList.add("clicked");
//         }
//     }
// });
   


rick.addEventListener("click", function(){
    rickCard.classList.toggle("clicked");
    this.classList.toggle("btn-light");
    this.classList.toggle("clicked");
});

danny.addEventListener("click", function(){
    dannyCard.classList.toggle("clicked");
    this.classList.toggle("btn-light");
    this.classList.toggle("clicked");
});

levi.addEventListener("click", function(){
    leviCard.classList.toggle("clicked");
    this.classList.toggle("btn-light");
    this.classList.toggle("clicked");
});

anthony.addEventListener("click", function(){
    AnthonyCard.classList.toggle("clicked");
    this.classList.toggle("btn-light");
    this.classList.toggle("clicked");
});

stef.addEventListener("click", function(){
    StefCard.classList.toggle("clicked");
    this.classList.toggle("btn-light");
    this.classList.toggle("clicked");
});

avi.addEventListener("click", function(){
    AviCard.classList.toggle("clicked");
    this.classList.toggle("btn-light");
    this.classList.toggle("clicked");
});