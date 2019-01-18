document.addEventListener('click', function (event) {

	if (event.target.matches('button')) {
		clickedButton = event.target;
		console.log("button clicked: "); console.log(clickedButton.id);
		var card = document.getElementById(clickedButton.id + "Card");
		card.classList.toggle("clicked");
		clickedButton.classList.toggle("btn-light");
		clickedButton.classList.toggle("clicked");
	}
}, false);
