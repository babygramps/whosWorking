var staff = ["rick", "danny", "levi", "anthony", "stef", "avi"];

for (var i=0; i<staff.length; i++){
    var idSelected = document.querySelector("#"+staff[i]);
    var cardSelected = document.getElementByID(staff[i] + "Card");
    
    idSelected.addEventListener("click", function(){
    cardSelected.classList.toggle("clicked");
    this.classList.toggle("btn-light");
    this.classList.toggle("clicked");
    });
}
