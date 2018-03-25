(function(){

var toGuess = Math.floor(Math.random()*1000)+1;

var button = document.getElementById("button");
var textField = document.getElementById("textField");
var label = document.getElementById("label");

button.addEventListener("click", function(){
	let nb = parseInt(textField.value);
	if(!isNaN(nb)) {
		if(nb > toGuess){
			label.innerHTML = "C'est plus petit.";
			label.style.color = "red";
		}else if(nb < toGuess){
			label.innerHTML = "C'est plus grand.";
			label.style.color = "red";
		}else{
			label.innerHTML = "C'est le bon nombre ! Félicitations";
			label.style.color = "green";
		}
	}
});

})();