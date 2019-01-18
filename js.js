var staff = ["rick", "danny", "levi", "anthony", "stef", "avi"];

for (var i=0; i<staff.length; i++){
    staff[i].addEventListener("click", function(){
        cardified = staff[i] + "Card"; // concatenates the word "Card" at the end of the staff name (a string) from the staff array
        cardified.classList.toggle("clicked");
        this.classList.toggle("btn-light");
        this.classList.toggle("clicked");
    });
}
