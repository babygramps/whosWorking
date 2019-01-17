var danny = document.querySelector("#danny");
var rick = document.querySelector("#rick");
var levi = document.querySelector("#levi");

var rickCard = document.getElementById("rickCard");
var dannyCard = document.getElementById("dannyCard");
var leviCard = document.getElementById("leviCard");

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
    rickCard.classList.toggle("d-none");
    this.classList.toggle("btn-light");
    this.classList.toggle("clicked");
});

danny.addEventListener("click", function(){
    dannyCard.classList.toggle("d-none");
    this.classList.toggle("btn-light");
    this.classList.toggle("clicked");
});

levi.addEventListener("click", function(){
    leviCard.classList.toggle("d-none");
    this.classList.toggle("btn-light");
    this.classList.toggle("clicked");
});